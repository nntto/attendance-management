import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req
  const { roomId, macAddresses }: { roomId: number; macAddresses: string[] } = JSON.parse(
    JSON.stringify(body),
  )

  if (method === 'PUT') {
    try {
      await prisma.macAddress.updateMany({
        where: {
          address: { in: macAddresses },
          Network: { Room: { id: roomId } },
        },
        data: { lastConnectedAt: new Date() },
      })

      res.status(200).end()
    } catch (e: unknown) {
      if (e instanceof Error) {
        res.status(400).end(e.message)
      }
    }
  } else {
    res.status(405).end('Method Not Allowed')
  }
}
