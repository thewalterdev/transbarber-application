import { Request, Response } from "express";
import z from "zod";
import prisma from "../../prisma";

const createNewService = async (req: Request, res: Response) => {
  const body = req.body;

  const createServiceBody = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
  });

  const { name, price, description } = createServiceBody.parse(req.body);

  const createService = await prisma.services.create({
    data: {
      name,
      price,
      description,
    },
  });

  return res.json(createService);
};

export default createNewService;
