"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthenticatedEvent = void 0;
class UserAuthenticatedEvent {
    constructor(username, reason) {
        this.defaultReason = 'Usuario autenticado correctamente';
        this.timestamp = new Date();
        this.username = username;
        this.reason = !reason ? this.defaultReason : reason;
    }
}
exports.UserAuthenticatedEvent = UserAuthenticatedEvent;
