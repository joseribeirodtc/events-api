import { Evento } from "../entity/Evento";
import { Router } from "express";
import { EventoController } from "../controller/EventoController";
import * as moment from "moment";

export const routerEvento = Router();
const eventoController = new EventoController();

//salvar evento
routerEvento.post("/", async (req, res) => {
  const { nome, data, quantidade_ingressos } = req.body;
  const evento = new Evento(nome, data, quantidade_ingressos);
  const eventoSalvo = await eventoController.salvar(evento);
  res.json(eventoSalvo);
});

//consulta evento por id
routerEvento.get("/:idEvento", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  const evento = await eventoController.recuperarPorId(idEvento);
  res.json(evento);
});

//consulta ingressos do evento
routerEvento.get("/ingressos/:idEvento", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  const ingressos = await eventoController.recuperarIngressosDoEvento(idEvento);
  res.json(ingressos);
});

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
  res.json(eventos);
});

//essa eh apenas para teste
//atualiza ingressos disponiveis
routerEvento.patch("/:idEvento/:quantidade", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  const quantidade = parseInt(req.params.quantidade);
  const evento = await eventoController.atualizarIngressosDisponiveis(
    idEvento,
    quantidade
  );
  res.json(evento);
});

//delete evento
routerEvento.delete("/:idEvento", async (req, res) => {
  const idEvento = parseInt(req.params.idEvento);
  await eventoController.deletarEvento(idEvento);
  res.status(204).send();
});
