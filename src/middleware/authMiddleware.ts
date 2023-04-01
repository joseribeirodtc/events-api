import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

// interface TokenPayload {
//   id: Number;
//   iat: Number;
//   exp: Number;
// }

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const autorizacao = req.headers.authorization;

  if (!autorizacao || !autorizacao.startsWith("Bearer ")) {
    return res
      .sendStatus(401)
      .json({ error: "Token de autenticação inválido" });
  }

  const token = autorizacao.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.SECRET) as jwt.JwtPayload;

    const id = parseInt(data.id);

    req.userId = id;

    return next();
  } catch {
    return res.sendStatus(401);
  }
}
