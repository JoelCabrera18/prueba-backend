"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSSQLDatabase = void 0;
const mssql_1 = require("mssql");
const dotenv_1 = require("dotenv");
const error_messages_enum_1 = require("../enums/auth/error-messages.enum");
(0, dotenv_1.config)();
// pregunta 6, 8
class MSSQLDatabase {
    constructor() {
        this.config = {
            server: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000,
            },
            options: {
                encrypt: false,
                trustServerCertificate: false,
            },
        };
        this.pool = new mssql_1.ConnectionPool(this.config);
    }
    query(statement, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let db = null;
            try {
                if (!this.pool.connected) {
                    yield this.pool.connect();
                }
                db = new mssql_1.PreparedStatement(this.pool);
                if (params) {
                    for (const [param, value] of Object.entries(params)) {
                        db.input(param, this.get_type(value));
                    }
                }
                yield db.prepare(statement);
                return yield db.execute(params || {});
            }
            catch (error) {
                throw new Error(error_messages_enum_1.ErrorMessages.FailedConnectDb);
            }
            finally {
                if (db)
                    yield db.unprepare();
                this.closePool();
            }
        });
    }
    closePool() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.pool.connected) {
                yield this.pool.close();
            }
        });
    }
    get_type(value) {
        const type_of_value = typeof value;
        switch (type_of_value) {
            case "string":
                return mssql_1.TYPES.NVarChar;
            case "number":
                return mssql_1.TYPES.Int;
            case "boolean":
                return mssql_1.TYPES.Bit;
            default:
                return mssql_1.TYPES.NVarChar;
        }
    }
}
exports.MSSQLDatabase = MSSQLDatabase;
