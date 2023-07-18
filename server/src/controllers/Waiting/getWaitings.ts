import { Request, Response } from "express";
import z from "zod";
import prisma from "../../prisma";

const getWaiting = async (req: Request, res: Response) => {
  const waitingList = await prisma.waiting.findMany();

  return res.json(waitingList);
};

export default getWaiting;
