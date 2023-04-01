import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export class AuthController {
  async generateToken(idUsuario: number) {
    const token = jwt.sign({ id: idUsuario }, process.env.SECRET, {
      expiresIn: "1d",
    });

    return token;
  }
}
