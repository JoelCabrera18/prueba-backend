import { Password } from "../../domain/value-objects/password.object";
import { Username } from "../../domain/value-objects/username.object";
import { AuthDto } from "../dto/auth-dto.interface";
import { AuthService } from "../services/auth.service";

export class LoginUseCase {
  constructor(private service: AuthService) {}
  public execute({ username, password }: AuthDto) {
    // ejecucion de validacion necesaria para antes de autenticar,
    // si alguno de los parametros no pasan las validaciones
    // aqui termina el proceso
    const $username = new Username(username);
    const $password = new Password(password);

    return this.service.login($username, $password);
  }
}
