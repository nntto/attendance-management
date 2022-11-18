import { PrismaClient, User, Comment, Nickname } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'
import inRoomTime from '../../../functions/inRoom'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'GET') {
    // 基準時刻inRoomTime()以降に接続された端末一覧を取得
    const macAddressInRoom = await prisma.macAddress.findMany({
      where: {
        lastConnectedAt: {
          gte: inRoomTime(),
        },
      },
      orderBy: {
        lastConnectedAt: 'desc', // 最終接続時刻が現在時刻から近い順
      },
      include: {
        Device: true,
        Network: true,
      },
    })

    const users = await prisma.user.findMany({
      where: {},
      include: {
        Comment: { orderBy: { createdAt: 'desc' } },
        Nickname: true,
      },
    })

    const rooms = await prisma.room.findMany()
    // 在室しているユーザーを格納する変数
    const inRoom = rooms.map((room) => ({
      ...room,
      users: [] as (User & {
        Comment: Comment[]
        Nickname: Nickname[]
        lastConnectedAt: Date
      })[],
    }))
    // 在室していないユーザーを格納する変数
    const outRoom = [] as (User & {
      Comment: Comment[]
      Nickname: Nickname[]
    })[]

    users.forEach((user) => {
      const userMacAddress = macAddressInRoom.find(
        (macAddress) => user.userId == macAddress.Device?.userId,
      )
      if (userMacAddress) {
        const userRoom = inRoom.find((room) => room.roomId == userMacAddress.Network?.roomId)
        if (userRoom) {
          userRoom.users.push({ ...user, lastConnectedAt: userMacAddress.lastConnectedAt })
          return
        }
        throw new Error('macAddressが部屋に紐づいていない')
      }
      outRoom.push(user)
    })

    //
    if (users === null) {
      res.status(404).end('User NotFound')
    } else {
      res.status(200).json({ inRoom: inRoom, outRoom: outRoom })
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
