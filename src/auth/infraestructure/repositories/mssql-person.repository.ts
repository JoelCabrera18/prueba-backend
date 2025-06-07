import { Database } from "../../../utils/interfaces/datatabase.interface";
import { Person } from "../../domain/entities/person.entity";
import { PersonRepository } from "../../domain/repositories/person.repository";

export class MSSqlPersonRepository implements PersonRepository {
  private persons = [
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
  constructor(private db: Database) {}
  public async getPerson(
		id_person: number,
  ): Promise<Person | null> {
    try {
			// Supuesta implementacion de consulta

			const person = this.persons.find((person) => person.id_person === id_person)
      return Person.create(person);
    } catch (error) {
      return null;
    }
  }
}
