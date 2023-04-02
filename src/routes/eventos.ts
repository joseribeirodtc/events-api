import { Evento } from "../entity/Evento";
import { Router } from "express";
import { EventoController } from "../controller/EventoController";
import * as moment from "moment";

export const routerEvento = Router();
const eventoController = new EventoController();

//salvar evento
routerEvento.post("/", async (req, res) => {
  const { nome, data, quantidade_ingressos } = req.body;

  if (!nome || !data || !quantidade_ingressos) {
    return res.sendStatus(400);
  }

  const eventoExiste = await eventoController.recuperarEventoPorData(data);

  if (eventoExiste) {
    return res.sendStatus(409);
  }

  const evento = new Evento(nome, data, quantidade_ingressos);
  const eventoSalvo = await eventoController.salvar(evento);
  return res.json(eventoSalvo);
});

//consulta evento por id
routerEvento.get("/:idEvento", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  const evento = await eventoController.recuperarPorId(idEvento);

  if (!evento) {
    return res.status(404).json({ mensagem: "Evento não encontrado!" });
  }

  return res.json(evento);
});

//totalmente redundante, agora quando busca evento por id, vem os ingresso vendidos daquele evento
// //consulta ingressos do evento
// routerEvento.get("/ingressos/:idEvento", async (req, res) => {
//   const idEvento = parseInt(req.params.idEvento);

//   const evento = await eventoController.recuperarPorId(idEvento);
//   if (!evento) {
//     return res.status(404).json({ mensagem: "Evento não encontrado!" });
//   }
//   const ingressos = await eventoController.recuperarIngressosDoEvento(idEvento);
//   return res.json(ingressos);
// });

//consulta eventos por data, ou todos
routerEvento.get("/", async (req, res) => {
  const getDataPadrao = (fn, year = 50) => {
    return moment()[fn](year, "years").format("YYYY-MM-DD");
  };
  const {
    data_inicio = getDataPadrao("subtract"),
    data_fim = getDataPadrao("add"),
  } = req.query;

  const eventos = await eventoController.recuperarEventosPorData(
    data_inicio,
    data_fim
  );
  return res.json(eventos);
});

//atualiza ingressos disponiveis
routerEvento.patch("/:idEvento/:quantidade", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  const quantidade = parseInt(req.params.quantidade);

  if (isNaN(quantidade) || isNaN(idEvento)) {
    return res.sendStatus(400);
  }

  const evento = await eventoController.recuperarPorId(idEvento);
  if (!evento) {
    return res.status(404).json({ mensagem: "Evento não encontrado!" });
  }

  const evento_atualizado =
    await eventoController.atualizarIngressosDisponiveis(idEvento, quantidade);

  return res.json(evento_atualizado);
});

// //delete evento
// routerEvento.delete("/:idEvento", async (req, res) => {
//   const idEvento = parseInt(req.params.idEvento);
//   await eventoController.deletarEvento(idEvento);
//   res.status(204).send();
// });
