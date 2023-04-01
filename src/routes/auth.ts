import { Router } from "express";

import { UsuarioController } from "../controller/UsuarioController";
import { AuthController } from "../controller/AuthController";

import * as bcrypt from "bcryptjs";

export const routerAuth = Router();
const authController = new AuthController();
const usuarioController = new UsuarioController();

//autenticar usuario
routerAuth.post("/", async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await usuarioController.recuperarPorEmail(email);

  if (!usuario) {
    return res.sendStatus(401);
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    return res.sendStatus(401);
  }

  const token = await authController.generateToken(usuario.id);

  delete usuario.senha;

  return res.json({
    usuario,
    token,
  });
});
