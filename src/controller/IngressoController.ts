import { getManager } from "typeorm";
import { Ingresso } from "../entity/Ingresso";

export class IngressoController {
  async salvar(ingresso: Ingresso) {
    const ingressoSalvo = await getManager().save(ingresso);
    return ingressoSalvo;
  }

  async recuperarTodos() {
    const ingressos = await getManager().find(Ingresso, {
      relations: ["evento"],
    });
    return ingressos;
  }

  async recuperarPorId(id: number) {
    if (id === undefined) {
      return null;
    }

    const ingresso = await getManager().findOne(Ingresso, id, {
      relations: ["usuario", "evento"],
    });
    return ingresso;
  }

  async deletarIngresso(id: number) {
    await getManager().delete(Ingresso, id);
  }
}
