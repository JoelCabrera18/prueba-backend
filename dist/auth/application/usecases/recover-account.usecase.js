"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverAccountUseCase = void 0;
const password_object_1 = require("@auth/domain/value-objects/password.object");
const username_object_1 = require("@auth/domain/value-objects/username.object");
class RecoverAccountUseCase {
    constructor(service) {
        this.service = service;
    }
    execute({ username, password }) {
        const $username = new username_object_1.Username(username);
        const $password = new password_object_1.Password(password);
        return this.service.recoverAccount($username, $password);
    }
}
exports.RecoverAccountUseCase = RecoverAccountUseCase;
