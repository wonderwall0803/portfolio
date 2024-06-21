import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Event } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title }: { title: string } = await req.body;
    const response = await prisma.event.create({
      data: {
        title,
      }
    })
    res.status(200).json(response)
  } else {
    const events: Event[] = await prisma.event.findMany();
    res.status(200).json(events)
  }
}