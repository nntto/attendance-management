import { Room } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Room[]>
) {
  /* ユーザー，デバイステーブルを結合して返す */
  const rooms = await prisma.room.findMany();
  res.status(200).json(rooms);
}
