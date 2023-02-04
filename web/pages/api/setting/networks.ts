import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export async function getNetworks() {
  return prisma.network.findMany()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    if (method === 'GET') {
      res.status(200).json(await getNetworks())
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
