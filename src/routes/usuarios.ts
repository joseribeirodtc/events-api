import { Usuario } from "../entity/Usuario";
import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";

export const routerUsuario = Router();
const usuarioController = new UsuarioController();

//salvar usuario
routerUsuario.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.sendStatus(400);
  }

  const usuarioExiste = await usuarioController.recuperarPorEmail(email);

  if (usuarioExiste) {
    return res.sendStatus(409);
  }

  const usuario = new Usuario(nome, email, senha);
  const usuarioSalvo = await usuarioController.salvar(usuario);
  return res.json(usuarioSalvo);
});

//consulta usuarios
routerUsuario.get("/", async (req, res) => {
  const usuarios = await usuarioController.recuperarTodos();
  return res.json(usuarios);
});

//consulta usuario por id
routerUsuario.get("/:idUsuario", async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const usuario = await usuarioController.recuperarPorId(idUsuario);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }
  return res.json(usuario);
});
