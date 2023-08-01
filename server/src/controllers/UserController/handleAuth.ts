import { sign, decode, verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../prisma";
import { compare } from "bcryptjs";

const handleAuth = async (req: Request, res: Response) => {
  const loginHandlerBody = z.object({
    email: z.string().email(),
    password: z.string(),
  });
  const { email, password } = loginHandlerBody.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  }

  const isCorrectPassword = await compare(password, user.password);

  if (!isCorrectPassword) {
    return res.status(401).json({ error: "Senha incorreta." });
  }

  const token = sign({ id: user.id }, "aslan", { expiresIn: "1d" });

  return res.json({
    user: { id: user.id, name: user.name, email: user.email },
    token,
  });
};

export default handleAuth;
