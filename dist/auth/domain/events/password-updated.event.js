"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaswordUpdatedEvent = void 0;
class PaswordUpdatedEvent {
    constructor(username, reason) {
        this.defaultReason = 'Clave de acceso actualizada correctamente';
        this.timestamp = new Date();
        this.username = username;
        this.reason = !reason ? this.defaultReason : reason;
    }
}
exports.PaswordUpdatedEvent = PaswordUpdatedEvent;
