"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidLoginException = void 0;
class InvalidLoginException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidLoginException = InvalidLoginException;
