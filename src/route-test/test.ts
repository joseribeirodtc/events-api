// import { Router } from "express";
// import { Usuario } from "../entity/Usuario";
// import { Evento } from "../entity/Evento";
// import { UsuarioController } from "../controller/UsuarioController";
// import { EventoController } from "../controller/EventoController";

// export const routerUsuario = Router();
// const usuarioController = new UsuarioController();

// //popular usuarios teste
// routerUsuario.post("/usuarios", async (req, res) => {
//   const { codigo } = req.body;

//   if (codigo !== "2077") {
//     return res.status(403).json({ mensagem: "Not today..." });
//   }

//   const usuario1 = new Usuario("pedro", "pedro@email.com", "123pedro");
//   const usuario2 = new Usuario("joana", "joana@email.com", "123joana");

//   await connection.getRepository(Usuario).save(usuario1);
//   await connection.getRepository(Usuario).save(usuario2);

//   const usuario = new Usuario(nome, email, senha);
//   const usuarioSalvo = await usuarioController.salvar(usuario);
//   res.json(usuarioSalvo);
// });

// //consulta usuarios
// routerUsuario.get("/", async (req, res) => {
//   const usuarios = await usuarioController.recuperarTodos();
//   res.json(usuarios);
// });

// //consulta usuario por id
// routerUsuario.get("/:idUsuario", async (req, res) => {
//   const idUsuario = parseInt(req.params.idUsuario);
//   const usuario = await usuarioController.recuperarPorId(idUsuario);
//   res.json(usuario);
// });

// //consulta ingressos do usuario
// routerUsuario.get("/ingressos/:idUsuario", async (req, res) => {
//   const idUsuario = parseInt(req.params.idUsuario);
//   const ingressos = await usuarioController.recuperarIngressosDoUsuario(
//     idUsuario
//   );
//   res.json(ingressos);
// });
