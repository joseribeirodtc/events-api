import { app } from "./app";

const PORTA = 3000;

const server = app.listen(PORTA, () =>
  console.log(`App ouvindo na porta ${PORTA}`)
);

//ao encerrar processo, o app eh finalizado tambem
process.on("SIGINT", () => {
  server.close();
  console.log("App finalizado");
});
