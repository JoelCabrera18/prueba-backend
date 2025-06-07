"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const error_messages_enum_1 = require("../../../utils/enums/auth/error-messages.enum");
const invalid_password_exception_1 = require("../exceptions/invalid.password.exception");
const bcrypt_1 = __importDefault(require("bcrypt"));
class Password {
    constructor(password, encriptPassword = false) {
        if (password.trim().length === 0)
            throw new invalid_password_exception_1.InvalidPasswprdException(error_messages_enum_1.ErrorMessages.InvalidPassword);
        this.password = encriptPassword ? this.encriptPassword(password) : password;
    }
    encriptPassword(password) {
        const saltRounds = 10;
        const salt = bcrypt_1.default.genSaltSync(saltRounds);
        const newPassword = bcrypt_1.default.hashSync(password, salt);
        return newPassword;
    }
    static comparePasswords(passwordTextPlain, passwordSaved) {
        return bcrypt_1.default.compareSync(passwordTextPlain, passwordSaved.password);
    }
}
exports.Password = Password;
