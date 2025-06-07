"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Username = void 0;
const error_messages_enum_1 = require("../../../utils/enums/auth/error-messages.enum");
const invalid_username_exception_1 = require("../exceptions/invalid.username.exception");
class Username {
    constructor(username) {
        if (username.trim().length === 0)
            throw new invalid_username_exception_1.InvalidUsernameException(error_messages_enum_1.ErrorMessages.ErrorUsername);
        this.username = username;
    }
}
exports.Username = Username;
