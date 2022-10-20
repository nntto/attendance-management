import { User, Device } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    (User & {
      devices: Device[];
    })[]
  >
) {
  /* ユーザー，デバイステーブルを結合して返す */
  const users = await prisma.user.findMany({
    include: { devices: { include: { room: true } } },
  });
  res.status(200).json(users);
}
