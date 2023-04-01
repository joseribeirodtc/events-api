import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import { Ingresso } from "./Ingresso";
import * as bcrypt from "bcryptjs";

@Entity()
export class Usuario {
  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @BeforeInsert()
  encriptarSenha() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }

  @OneToMany(() => Ingresso, (ingresso) => ingresso.usuario)
  ingressos: Ingresso[];
}
