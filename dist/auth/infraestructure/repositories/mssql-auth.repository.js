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
exports.MSSQLAuthRepository = void 0;
const auth_entity_1 = require("../../domain/entities/auth.entity");
class MSSQLAuthRepository {
    constructor(db) {
        this.db = db;
        /**
         * credianciales en texto plano
         * credential 1: joel123
         * credential 2: joel1234
         * credential 3: joel12345
         *
         */
        this.credentials = [
            {
                id_credential: 1,
                id_enterprise: 1,
                id_person: 1,
                username: "joelcabrera78",
                password: "$2b$10$pLHTa1Ex2Ax/duOzDsXiSOyR9Ci2vtI97mtJzaDT3jiHMdk/opUfm",
                statusCredential: 1,
            },
            {
                id_credential: 2,
                id_enterprise: 1,
                id_person: 2,
                username: "joeldavid78",
                password: "$2b$10$J3hnNvSth2wa1yq1clHPKOxOekc0YqmQGW2DyhIhspRBwfy8zTi5W",
                statusCredential: 1,
            },
            {
                id_credential: 2,
                id_enterprise: 1,
                id_person: 3,
                username: "joeldavid72",
                password: "$2b$10$iA8tybzuzQ4t32QJvdUaG.GF4QLG8u1vX3uqZWmdp1hi/730boXfa",
                statusCredential: 2,
            },
        ];
    }
    get_credential(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //? supuesto caso de que se tenga implementada la base de datos, asi se veria el procedimiento
                // const params = {
                //   username: user.username,
                // };
                // const statement = "EXEC Auth.get_credential @username";
                // const query = await this.db.query(statement, params);
                // const credentialLike = query.recordset[0];
                const credentialLike = this.credentials.find((credential) => credential.username === user.username);
                return auth_entity_1.AuthEntity.createCredential(credentialLike);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.MSSQLAuthRepository = MSSQLAuthRepository;
