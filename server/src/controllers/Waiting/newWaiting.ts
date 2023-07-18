import { Request, Response } from "express";
import z from "zod";
import prisma from "../../prisma";

const createNewWaiting = async (req: Request, res: Response) => {
  const serviceSchema = z.object({
    id: z.string().uuid(),
  });

  const createNewWaitingBody = z.object({
    name: z.string(),
    services: z.array(serviceSchema),
  });

  const { name, services } = createNewWaitingBody.parse(req.body);

  const response = await prisma.waiting.create({
    data: {
      name,
      services: {
        connect: services.map((service) => ({
          id: service.id,
        })),
      },
    },
    include: {
      services: true,
    },
  });

  return res.json(response);
};

export default createNewWaiting;
