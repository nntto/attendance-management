import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'POST') {
    try {
      const macAddress = await prisma.macAddress.create({
        data: req.body,
      })
      res.status(200).json(macAddress)
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e)
        res.status(400).end(e.message)
      }
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
