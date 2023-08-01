// PRECISA SER CONSERTADO

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
};

export default createNewWaiting;
