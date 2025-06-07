import { InvalidLoginException } from "../../auth/application/exceptions/invalid.login.exception";
import { InvalidPasswprdException } from "../../auth/domain/exceptions/invalid.password.exception";
import { InvalidUsernameException } from "../../auth/domain/exceptions/invalid.username.exception";

export const handerAuthError = (error: any) => {
  let message = "",
    title = "";

  if (
    error instanceof InvalidUsernameException ||
    error instanceof InvalidPasswprdException
  ) {
    title = "Error de validación";
    message = "Las credenciales no son adecuadas para validar";
    return { title, message };
  }

  // si es Excepcion de tipo InvalidLoginException, directamente devuelvo un error generico,
  // no doy indicio de que falló, simplemente fallo

  title = "Error inesperado";
  message = "Las credenciales  no coinciden con nuestros registros";
  return { title, message };
};
