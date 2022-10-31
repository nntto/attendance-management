import { PrismaClient, User, Comment, Nickname } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'GET') {
    const user = await prisma.user.findMany({
      where: {
        
      },
      include: {
        // Device: { include: { MacAddress: { include: { Network: { include: { Room: true } } } } } },
        Comment: true,
        Nickname: true,
        
      },
    })

    if (user === null) {
      res.status(404).end('User NotFound')
    } else {
      res.status(200).json(user)
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}