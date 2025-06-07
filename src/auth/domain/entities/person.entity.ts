export class Person {
	private id_person: number;
	private first_name: string;
	private second_name: string;
	private first_lastname: string;
	private second_lastname: string;
	private full_name: string;
	private birthday: string;
	private dni: string;

	constructor(
		id_person: number,
		first_name: string,
		second_name: string,
		first_lastname: string,
		second_lastname: string,
		full_name: string,
		birthday: string,
		dni: string
	) {
		this.id_person = id_person;
		this.first_name = first_name;
		this.second_name = second_name;
		this.first_lastname = first_lastname;
		this.second_lastname = second_lastname;
		this.full_name = full_name;
		this.birthday = birthday;
		this.dni = dni;
	}
	public static create(person: any) {
		const { id_person, first_name, second_name, first_lastname, second_lastname, full_name, birthday, dni } = person;
		return new Person(id_person, first_name, second_name, first_lastname, second_lastname, full_name, birthday, dni);
	}

	// Posibles otras opciones que podria hacer esta clase
	get IdPerson(): number {
		return this.id_person;
	}
	get FirstName(): string {
		return this.first_name;
	}
	get secondName(): string {
		return this.second_name;
	}
	get FirstLastname(): string {
		return this.first_lastname;
	}
	get SecondLastname(): string {
		return this.second_lastname;
	}
	get FullName(): string {
		return this.full_name;
	}
	get Birthday(): string {
		return this.birthday;
	}
	get Dni(): string {
		return this.dni;
	}
}
