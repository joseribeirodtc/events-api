import { Usuario } from "../entity/Usuario";
import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";

export const routerUsuario = Router();
const usuarioController = new UsuarioController();

//salvar usuario
routerUsuario.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  const usuarioExiste = await usuarioController.recuperarPorEmail(email);
  console.log("usuarioExiste", usuarioExiste);

  if (usuarioExiste) {
    return res.sendStatus(409);
  }

  const usuario = new Usuario(nome, email, senha);
  const usuarioSalvo = await usuarioController.salvar(usuario);
  res.json(usuarioSalvo);
});

//consulta usuarios
routerUsuario.get("/", async (req, res) => {
  const usuarios = await usuarioController.recuperarTodos();
  res.json(usuarios);
});

//consulta usuario por id
routerUsuario.get("/:idUsuario", async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const usuario = await usuarioController.recuperarPorId(idUsuario);
  res.json(usuario);
});

//consulta ingressos do usuario
routerUsuario.get("/ingressos/:idUsuario", async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  const ingressos = await usuarioController.recuperarIngressosDoUsuario(
    idUsuario
  );
  res.json(ingressos);
});
