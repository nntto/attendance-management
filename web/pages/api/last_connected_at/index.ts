import { User, Device, MacAddress, Network, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    (User & {
      Device: (Device & {
        MacAddress: (MacAddress & {
          Network: Network | null
        })[]
      })[]
    })[]
  >,
) {
  /* ユーザー，デバイステーブルを結合して返す */
  const users = await prisma.user.findMany({
    include: {
      Device: { include: { MacAddress: { include: { Network: { include: { Room: true } } } } } },
    },
  })
  res.status(200).json(users)
}
