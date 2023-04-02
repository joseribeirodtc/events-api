import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
  async salvar(usuario: Usuario) {
    const usuarioSalvo = await getManager().save(usuario);
    return usuarioSalvo;
  }

  async recuperarTodos() {
    const usuarios = await getManager().find(Usuario);
    return usuarios;
  }

  async recuperarPorEmail(email: string) {
    if (email === undefined) {
      return null;
    }

    const usuario = await getManager().findOne(Usuario, { where: { email } });
    return usuario;
  }

  async recuperarPorId(id: number) {
    if (id === undefined) {
      return null;
    }

    const usuario = await getManager().findOne(Usuario, id, {
      relations: ["ingressos"],
    });
    return usuario;
  }

  // async recuperarIngressosDoUsuario(id: number) {
  //   if (id === undefined) {
  //     return null;
  //   }
  //   const usuario = await getManager().findOne(Usuario, id, {
  //     relations: ["ingressos"],
  //   });
  //   return usuario.ingressos;
  // }
}
