"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogService = void 0;
const audit_entity_1 = require("@auth/domain/entities/audit.entity");
class AuditLogService {
    constructor(auditRepository) {
        this.auditRepository = auditRepository;
    }
    saveLog(auditLog) {
        try {
            const log = new audit_entity_1.AuditLogEntity(auditLog);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.AuditLogService = AuditLogService;
