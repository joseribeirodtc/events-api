import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ingresso } from "./Ingresso";

@Entity()
export class Evento {
  constructor(nome: string, data: Date, quantidade_ingressos: number) {
    this.nome = nome;
    this.data = data;
    this.quantidade_ingressos = quantidade_ingressos;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data: Date;

  @Column()
  quantidade_ingressos: number;

  @OneToMany(() => Ingresso, (ingresso) => ingresso.evento)
  ingressos: Ingresso[];
}
