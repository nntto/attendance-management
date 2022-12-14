import { Room, Network, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Room[]>) {
  /* ユーザー，デバイステーブルを結合して返す */
  const rooms = await prisma.room.findMany({ include: { Network: true } })
  res.status(200).json(rooms)
}
