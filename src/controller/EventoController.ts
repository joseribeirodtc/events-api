import { getManager } from "typeorm";
import { Evento } from "../entity/Evento";

export class EventoController {
  async salvar(evento: Evento) {
    const eventoSalvo = await getManager().save(evento);
    return eventoSalvo;
  }

  async recuperarTodos() {
    const eventos = await getManager().find(Evento);
    return eventos;
  }

  async recuperarPorId(id: number) {
    if (id === undefined) {
      return null;
    }
    const evento = await getManager().findOne(Evento, id);
    return evento;
  }

  async recuperarEventosPorData(data1: Date, data2: Date) {
    const eventos = await getManager()
      .createQueryBuilder(Evento, "evento")
      .where("evento.data >= :data1", { data1 })
      .andWhere("evento.data <= :data2", { data2 })
      .getMany();

    return eventos;
  }

  async recuperarIngressosDoEvento(id: number) {
    if (id === undefined) {
      return null;
    }
    const evento = await getManager().findOne(Evento, id, {
      relations: ["ingressos"],
    });
    return evento.ingressos;
  }

  async atualizarIngressosDisponiveis(id: number, quantidade: number) {
    if (id === undefined) {
      return null;
    }
    await getManager().update(Evento, id, {
      quantidade_ingressos: quantidade,
    });

    const evento = await getManager().findOne(Evento, id);
    return evento;
  }

  async deletarEvento(id: number) {
    await getManager().delete(Evento, id);
  }
}
