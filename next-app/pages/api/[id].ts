import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Event } from '@prisma/client';

const prisma = new PrismaClient();

export default async function patch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PATCH') {
    const eventId = Number(req.query.id);
    const { completed }: { completed: boolean } = await req.body;
    const response = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        completed: !completed,
      }
    })
    res.status(200).json(response);
  } else {
    const eventId = Number(req.query.id);
    const response = await prisma.event.delete({
      where: {
        id: eventId,
      }
    })
    return res.status(200).json(response);
  }
}