import { sign } from "jsonwebtoken";
import { ErrorMessages } from "../../../utils/enums/auth/error-messages.enum";
import { AuthEntity } from "../../domain/entities/auth.entity";
import { Person } from "../../domain/entities/person.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Password } from "../../domain/value-objects/password.object";
import { Username } from "../../domain/value-objects/username.object";
import { PersonRepository } from "../../domain/repositories/person.repository";

export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private personRepository: PersonRepository
  ) {}
  public async login(username: Username, password: Password) {
    let credential: AuthEntity | null = null;
    try {
      credential = await this.authRepository.get_credential(username);

      credential.compareBothsPasswords(password.password);

      const person = await this.get_information_person(credential.IdPerson);

      const token = this.get_token(credential.Username.username);

      const user = this.createUserObject(person);

      // perfectamente se podria usar algun patron de diseño creacional para contruir un objeto de respuesta.
      return { user, token };
    } catch (error: any) {
      throw error;
    }
  }

  private get_token(payload: any) {
    const secret = process.env.JWT_SECRET_KEY;
    const token = sign({ payload }, secret!);
    return token;
  }

  private async get_information_person(id_person: number): Promise<Person> {
    const person = await this.personRepository.getPerson(id_person);
    if (!person) throw new Error(ErrorMessages.InvalidPersonInformacion);

    return person;
  }

  private createUserObject(person: Person) {
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
