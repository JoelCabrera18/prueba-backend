"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id_person, first_name, second_name, first_lastname, second_lastname, full_name, birthday, dni) {
        this.id_person = id_person;
        this.first_name = first_name;
        this.second_name = second_name;
        this.first_lastname = first_lastname;
        this.second_lastname = second_lastname;
        this.full_name = full_name;
        this.birthday = birthday;
        this.dni = dni;
    }
    static create(person) {
        const { id_person, first_name, second_name, first_lastname, second_lastname, full_name, birthday, dni } = person;
        return new Person(id_person, first_name, second_name, first_lastname, second_lastname, full_name, birthday, dni);
    }
    // Posibles otras opciones que podria hacer esta clase
    get IdPerson() {
        return this.id_person;
    }
    get FirstName() {
        return this.first_name;
    }
    get secondName() {
        return this.second_name;
    }
    get FirstLastname() {
        return this.first_lastname;
    }
    get SecondLastname() {
        return this.second_lastname;
    }
    get FullName() {
        return this.full_name;
    }
    get Birthday() {
        return this.birthday;
    }
    get Dni() {
        return this.dni;
    }
}
exports.Person = Person;
