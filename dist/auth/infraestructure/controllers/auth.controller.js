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
exports.AuthController = void 0;
const mssql_database_util_1 = require("../../../utils/classes/mssql-database.util");
const auth_service_1 = require("../../application/services/auth.service");
const login_usecase_1 = require("../../application/usecases/login.usecase");
const mssql_auth_repository_1 = require("../repositories/mssql-auth.repository");
const mssql_person_repository_1 = require("../repositories/mssql-person.repository");
const error_handler_module_1 = require("../../../utils/modules/error-handler.module");
class AuthController {
    constructor() {
        // Pregunta 3 y 5
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const credential = { username, password };
                const useCase = new login_usecase_1.LoginUseCase(this.authService);
                const login = yield useCase.execute(credential);
                res.status(200).json(login);
            }
            catch (error) {
                let response = (0, error_handler_module_1.handerAuthError)(error);
                // perfectamente se podria usar algun patron de diseño creacional para contruir un objeto de respuesta.
                res.status(401).json(response);
            }
        });
        const datatabase = new mssql_database_util_1.MSSQLDatabase();
        const authRepository = new mssql_auth_repository_1.MSSQLAuthRepository(datatabase);
        const personRepository = new mssql_person_repository_1.MSSqlPersonRepository(datatabase);
        this.authService = new auth_service_1.AuthService(authRepository, personRepository);
    }
}
exports.AuthController = AuthController;
