import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'POST') {
      const macAddress = await prisma.macAddress.create({
        data: req.body,
      })
      res.status(200).json(macAddress)
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
