"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["PasswordNotUpdated"] = "Password no actualizada debido a un error interno, por favor revisar el repositorio de datos";
    ErrorMessages["ErrorUsername"] = "Nombre de usuario debe tener por lo menos 10 caracteres";
    ErrorMessages["InvalidPassword"] = "La clave de acceso debe tener por lo menos 10 caracteres";
    ErrorMessages["InternalError"] = "Ha ocurrrido un error interno de forma inesperada, por favor comuniquese con el area de sistemas";
    ErrorMessages["CredentialsAreNotEquals"] = "Las credenciales no coinciden con nuestros registros";
    ErrorMessages["InvalidCredential"] = "La cuenta de usuario no fue encontrada.";
    ErrorMessages["InvalidPersonInformacion"] = "Lo sentimos la informacion acerca del usuario parece ser que no existe.";
    ErrorMessages["FailedConnectDb"] = "No hemos podido conectarnos a la base de datos.";
})(ErrorMessages || (exports.ErrorMessages = ErrorMessages = {}));
