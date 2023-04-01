import { Usuario } from "./Usuario";
import { Evento } from "./Evento";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingresso {
  constructor(usuario: Usuario, evento: Evento) {
    this.usuario = usuario;
    this.evento = evento;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario)
  usuario: Usuario;

  @ManyToOne(() => Evento)
  evento: Evento;
}
