import { Request, Response } from "express";
import z from "zod";
import prisma from "../../prisma";

const deleteService = async (req: Request, res: Response) => {
  const deleteServiceBody = z.object({
    id: z.string().uuid(),
  });

  const { id } = deleteServiceBody.parse(req.body);

  const response = await prisma.services.delete({
    where: {
      id,
    },
  });

  return res.json(response);
};

export default deleteService;
