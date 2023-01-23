import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  return user
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const userId = req.query.userId

  if (!userId || Array.isArray(userId)) {
    res.status(400).end('Invalid UserId')
    return
  }

  if (method === 'GET') {
    const user = await getUser(userId)

    if (user === null) {
      res.status(404).end('User NotFound')
    } else {
      res.status(200).json(user)
    }
  } else if (method === 'PUT') {
    try {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: req.body,
      })
      res.status(200).json(user)
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).end(e.message)
      }
      res.status(400).end()
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
