"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogEntity = void 0;
class AuditLogEntity {
    constructor(username, reason, date, id_log) {
        this.id_log = id_log;
        this.date = date;
        this.username = username;
        this.reason = reason;
    }
    createLog(event) {
        if (!event)
            return;
        const { username, reason, date, id_log } = event;
        return new AuditLogEntity(username, reason, date, id_log);
    }
    get IdLog() {
        return this.id_log;
    }
    get Username() {
        return this.username;
    }
    get Reason() {
        return this.reason;
    }
    get Date() {
        return this.date;
    }
}
exports.AuditLogEntity = AuditLogEntity;
