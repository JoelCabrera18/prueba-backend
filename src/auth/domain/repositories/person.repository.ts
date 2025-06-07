import { Person } from "../entities/person.entity";
import { Username } from "../value-objects/username.object";


export interface PersonRepository {
	getPerson(id_person: number): Promise<Person | null>;
}
