import { Room } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Room[]>) {
  /* ユーザー，デバイステーブルを結合して返す */
  const rooms = await prisma.room.findMany({ include: { Network: true } })
  res.status(200).json(rooms)
}
