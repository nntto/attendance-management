import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'GET') {
      const network = await prisma.network.findMany()
      res.status(200).json(network)
    } else {
      res.status(405).end('Method Not Allowed')
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e)
      res.status(400).end(e.message)
    }
  }
}
