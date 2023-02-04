import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const macAddressId = Number(req.query.macAddressId)

  if (!macAddressId || Array.isArray(macAddressId)) {
    res.status(400).end('Invalid macAddressId')
    return
  }

  try {
    if (method === 'GET') {
      const macAddress = await prisma.macAddress.findUnique({
        where: {
          id: macAddressId,
        },
      })
      res.status(200).json(macAddress)
    } else if (method === 'PUT') {
      console.log(req.body)
      const macAddress = await prisma.macAddress.update({
        where: {
          id: macAddressId,
        },
        data: req.body,
      })
      res.status(200).json(macAddress)
    } else if (method === 'DELETE') {
      await prisma.macAddress.delete({
        where: {
          id: macAddressId,
        },
      })
      res.status(200).end('Delete Complete')
    } else {
      res.status(405).end('Method Not Allowed')
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e)
      res.status(400).end(e.message)
    }
    res.status(400).end()
  }
}
