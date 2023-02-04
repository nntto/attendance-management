import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  // if (method === 'PUT') {
  //   try {
  //     const user = await prisma.user.findUnique({
  //       where: {
  //         userId: Number(userId),
  //       },
  //       data: JSON.parse(req.body),
  //     })
  //     res.status(200).json(user)
  //   } catch (e: unknown) {
  //     if (e instanceof Error) {
  //       res.status(400).end(e.message)
  //     }
  //   }
  // } else {
  //   res.status(405).end('Method Not Allowed')
  // }
}
