import { Request, Response } from "express";
import { z } from "zod";

import prisma from "../../prisma";
import { hash } from "bcryptjs";

const createUser = async (req: Request, res: Response) => {
  const createUserBody = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
  });

  const { email, name, password } = createUserBody.parse(req.body);

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    const hash_password = await hash(password, 8);
    const response = await prisma.user.create({
      data: {
        email,
        name,
        password: hash_password,
      },
    });

    return res.json(response);
  } else {
    return res.status(401).json({ error: "O usuário já existe." });
  }
};

export default createUser;
