import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export async function getUserDevices(userId: string) {
  const rooms = await prisma.room.findMany()
  const devices = await prisma.device.findMany({
    where: {
      userId: userId,
    },
    include: {
      MacAddress: true,
    },
  })
  const networks = await prisma.network.findMany()
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  return {
    rooms: rooms.map((room) => {
      const roomNetworks = networks.filter((network) => network.roomId === room.id)
      return {
        ...room,
        devices: devices.map((device) => ({
          ...device,
          MacAddress: undefined,
          addresses: roomNetworks.map((roomNetwork) => ({
            network: roomNetwork,
            macAddress: device.MacAddress.find((m) => m.networkId === roomNetwork.id),
          })),
        })),
      }
    }),
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const userId = req.query.userId

  if (!userId || Array.isArray(userId)) {
    res.status(400).end('Invalid UserId')
    return
  }

  try {
    if (method === 'GET') {
      res.status(200).json(await getUserDevices(userId))
    } else if (method === 'PUT') {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: JSON.parse(req.body),
      })
      res.status(200).json(user)
    } else {
      res.status(405).end('Method Not Allowed')
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).end(e.message)
    }
  }
}
