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
const person_entity_1 = require("../../domain/entities/person.entity");
class MSSqlPersonRepository {
    constructor(db) {
        this.db = db;
        this.persons = [
            {
                id_person: 1,
                first_name: "Joel",
                second_name: "David",
                first_lastname: "Cabrera",
                second_lastname: "Parrales",
                full_name: "Joel David Cabrera Parrales",
                birthday: "18/10/1999",
                dni: "0943357885",
            },
            {
                id_person: 2,
                first_name: "Lucien",
                second_name: "David",
                first_lastname: "Snyder",
                second_lastname: "Alpherest",
                full_name: "Lucien David Snyder Alpherest",
                birthday: "18/10/1997",
                dni: "0943357888",
            },
            {
                id_person: 3,
                first_name: "Lucien",
                second_name: "David",
                first_lastname: "Snyder",
                second_lastname: "Espinoza",
                full_name: "Lucien David Snyder Alpherest",
                birthday: "18/10/1997",
                dni: "0943357838",
            },
        ];
    }
    getPerson(id_person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Supuesta implementacion de consulta
                const person = this.persons.find((person) => person.id_person === id_person);
                return person_entity_1.Person.create(person);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MSSqlPersonRepository = MSSqlPersonRepository;
