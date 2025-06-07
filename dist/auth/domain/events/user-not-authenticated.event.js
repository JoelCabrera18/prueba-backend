"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotAuthenticatedEvent = void 0;
class UserNotAuthenticatedEvent {
    constructor(username, reason) {
        this.timestamp = new Date();
        this.username = username;
        this.reason = reason;
    }
}
exports.UserNotAuthenticatedEvent = UserNotAuthenticatedEvent;
