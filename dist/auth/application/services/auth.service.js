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
exports.AuthService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const error_messages_enum_1 = require("../../../utils/enums/auth/error-messages.enum");
class AuthService {
    constructor(authRepository, personRepository) {
        this.authRepository = authRepository;
        this.personRepository = personRepository;
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let credential = null;
            try {
                credential = yield this.authRepository.get_credential(username);
                credential.compareBothsPasswords(password.password);
                const person = yield this.get_information_person(credential.IdPerson);
                const token = this.get_token(credential.Username.username);
                const user = this.createUserObject(person);
                // perfectamente se podria usar algun patron de diseño creacional para contruir un objeto de respuesta.
                return { user, token };
            }
            catch (error) {
                throw error;
            }
        });
    }
    get_token(payload) {
        const secret = process.env.JWT_SECRET_KEY;
        const token = (0, jsonwebtoken_1.sign)({ payload }, secret);
        return token;
    }
    get_information_person(id_person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.personRepository.getPerson(id_person);
            if (!person)
                throw new Error(error_messages_enum_1.ErrorMessages.InvalidPersonInformacion);
            return person;
        });
    }
    createUserObject(person) {
        const personObject = {
            person: person.IdPerson,
            fullname: person.FullName,
            first_name: person.FirstName,
            second_name: person.secondName,
            first_lastname: person.FirstLastname,
            second_lastname: person.SecondLastname,
        };
        return personObject;
    }
}
exports.AuthService = AuthService;
