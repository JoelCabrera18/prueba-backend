"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handerAuthError = void 0;
const invalid_password_exception_1 = require("../../auth/domain/exceptions/invalid.password.exception");
const invalid_username_exception_1 = require("../../auth/domain/exceptions/invalid.username.exception");
const handerAuthError = (error) => {
    let message = "", title = "";
    if (error instanceof invalid_username_exception_1.InvalidUsernameException ||
        error instanceof invalid_password_exception_1.InvalidPasswprdException) {
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
exports.handerAuthError = handerAuthError;
