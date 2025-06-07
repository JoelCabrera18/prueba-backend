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
exports.MSSqlPersonRepository = void 0;
const person_entity_1 = require("@auth/domain/entities/person.entity");
class MSSqlPersonRepository {
    constructor(db) {
        this.db = db;
    }
    getPerson(username, id_enterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = {
                    username: username.username,
                    id_enterprise
                };
                const statement = 'EXEC [Auth].get_person_by_username @username, @id_enterprise';
                const query = yield this.db.query(statement, params);
                const person = query.recordset[0];
                if (!person)
                    return null;
                return person_entity_1.Person.create(person);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MSSqlPersonRepository = MSSqlPersonRepository;
