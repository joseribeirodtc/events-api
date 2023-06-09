import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { conectarServidorNoBD } from "./config/db";
import { routerUsuario } from "./routes/usuarios";
import { routerEvento } from "./routes/eventos";
import { routerIngresso } from "./routes/ingressos";
import { routerAuth } from "./routes/auth";

import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger("dev"));

conectarServidorNoBD();

//configuracao de rotas

app.use("/usuarios", routerUsuario);
app.use("/auth", routerAuth);
app.use("/eventos", routerEvento);
app.use("/ingressos", routerIngresso);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", (req, res) =>
  res.send({ greetings: "API Events! Decolando na velocidade da luz!" })
);
