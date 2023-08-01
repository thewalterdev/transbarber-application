import { Request, Response } from "express";
import prisma from "../../prisma";

const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  return res.json(users);
};

export default getUsers;
