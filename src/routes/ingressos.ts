import { Ingresso } from "../entity/Ingresso";
import { Router } from "express";
import { IngressoController } from "../controller/IngressoController";
import { EventoController } from "../controller/EventoController";
import { UsuarioController } from "../controller/UsuarioController";

import authMiddleware from "../middleware/authMiddleware";

export const routerIngresso = Router();
const ingressoController = new IngressoController();
const eventoController = new EventoController();
const usuarioController = new UsuarioController();

//salvar ingresso
routerIngresso.post("/", authMiddleware, async (req, res) => {
  const { idUsuario, idEvento } = req.body;
  const usuario = await usuarioController.recuperarPorId(idUsuario);
  const evento = await eventoController.recuperarPorId(idEvento);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  if (!evento) {
    return res.status(404).json({ mensagem: "Evento não encontrado" });
  }

  if (usuario && evento) {
    const quantidade = evento.quantidade_ingressos;

    if (quantidade === 0) {
      return res.status(403).json({ mensagem: "Ingressos esgotados!" });
    }
    const nova_quantidade = quantidade - 1;

    await eventoController.atualizarIngressosDisponiveis(
      idEvento,
      nova_quantidade
    );

    const ingresso = new Ingresso(usuario, evento);
    const ingresso_salvo = await ingressoController.salvar(ingresso);
    return res.json(ingresso_salvo);
  }
});

//consulta ingresso por id
routerIngresso.get("/:idIngresso", async (req, res) => {
  const idIngresso = parseInt(req.params.idIngresso);
  const ingresso = await ingressoController.recuperarPorId(idIngresso);

  if (!ingresso) {
    return res.status(404).json({ mensagem: "Ingresso não encontrado" });
  }
  return res.json(ingresso);
});
