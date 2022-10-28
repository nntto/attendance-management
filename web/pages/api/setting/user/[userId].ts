import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const userId = Number(req.query.userId)

  if (isNaN(userId)) {
    res.status(400).end('Invalid UserId')
  }

  if (method === 'GET') {
    const user = await prisma.user.findUnique({
      where: {
        userId: Number(userId),
      },
    })

    if (user === null) {
      res.status(404).end('User NotFound')
    } else {
      res.status(200).json(user)
    }
  } else if (method === 'PUT') {
    try {
      const user = await prisma.user.update({
        where: {
          userId: Number(userId),
        },
        data: JSON.parse(req.body),
      })
      res.status(200).json(user)
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).end(e.message)
      }
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
