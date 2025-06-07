"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaswordNotUpdatedEvent = void 0;
class PaswordNotUpdatedEvent {
    constructor(username, reason) {
        this.timestamp = new Date();
        this.username = username;
        this.reason = reason;
    }
}
exports.PaswordNotUpdatedEvent = PaswordNotUpdatedEvent;
