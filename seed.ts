// import { Connection } from "typeorm";
// import { Usuario } from "./src/entity/Usuario";
// import { Evento } from "./src/entity/Evento";

// async (connection: Connection) => {
//   // cria usuarios
//   const usuario1 = new Usuario("pedro", "pedro@email.com", "123pedro");
//   const usuario2 = new Usuario("joana", "joana@email.com", "123joana");

//   await connection.getRepository(Usuario).save(usuario1);
//   await connection.getRepository(Usuario).save(usuario2);

//   // cria eventos
//   const evento1 = new Evento("Show Red Hot", "2023-11-04", "3");
//   const evento2 = new Evento("Show Red Hot", "2023-11-04", "3");

//   await connection.getRepository(Evento).save(evento1);
//   await connection.getRepository(Evento).save(evento2);
// };
