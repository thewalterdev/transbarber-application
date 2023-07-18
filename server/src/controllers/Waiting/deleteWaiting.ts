import { Request, Response } from "express";
import z from "zod";
import prisma from "../../prisma";

const deleteWaiting = async (req: Request, res: Response) => {
  const deleteWaitingBody = z.object({
    id: z.string().uuid(),
  });

  const { id } = deleteWaitingBody.parse(req.body);

  const response = await prisma.waiting.delete({
    where: {
      id,
    },
  });

  return res.json(response);
};

export default deleteWaiting;
