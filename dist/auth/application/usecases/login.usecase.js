"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const password_object_1 = require("../../domain/value-objects/password.object");
const username_object_1 = require("../../domain/value-objects/username.object");
class LoginUseCase {
    constructor(service) {
        this.service = service;
    }
    execute({ username, password }) {
        // ejecucion de validacion necesaria para antes de autenticar,
        // si alguno de los parametros no pasan las validaciones
        // aqui termina el proceso
        const $username = new username_object_1.Username(username);
        const $password = new password_object_1.Password(password);
        return this.service.login($username, $password);
    }
}
exports.LoginUseCase = LoginUseCase;
