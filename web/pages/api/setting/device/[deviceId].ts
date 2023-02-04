import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  const deviceId = Number(req.query.deviceId)

  if (!deviceId || Array.isArray(deviceId)) {
    res.status(400).end('Invalid deviceId')
    return
  }

  try {
    if (method === 'GET') {
      const device = await prisma.device.findUnique({
        where: {
          id: deviceId,
        },
      })
      res.status(200).json(device)
    } else if (method === 'PUT') {
      console.log(req.body)
      const device = await prisma.device.update({
        where: {
          id: deviceId,
        },
        data: req.body,
      })
      res.status(200).json(device)
    } else if (method === 'DELETE') {
      await prisma.device.delete({
        where: {
          id: deviceId,
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
  }
}
