import { ErrorMessages } from "../../../utils/enums/auth/error-messages.enum";
import { InvalidLoginException } from "../../application/exceptions/invalid.login.exception";
import { PasswordsNotEqualsException } from "../exceptions/password-not-equals.exception copy";
import { Password } from "../value-objects/password.object";
import { Username } from "../value-objects/username.object";

export enum StatusCredential {
  Blocked = 0,
  Active = 1,
  Inactive = 2,
}
export class AuthEntity {
  private id_enterprise: number;
  private id_person: number;
  private id_credential: number;
  private username: Username;
  private password: Password;
  private statusCredential: StatusCredential;

  constructor(
    id_credential: number,
    id_enterprise: number,
    id_person: number,
    username: Username,
    password: Password,
    statusCredential: StatusCredential
  ) {
    this.id_enterprise = id_enterprise;
    this.id_credential = id_credential;
    this.username = username;
    this.password = password;
    this.statusCredential = statusCredential;
    this.id_person = id_person;
  }

  public static createCredential(
    credentialLike: any,
    encriptPassword: boolean = false
  ) {
    if (!credentialLike || credentialLike === undefined) {
      throw new InvalidLoginException(ErrorMessages.InvalidCredential);
    }

    const {
      id_credential,
      id_enterprise,
      id_person,
      username,
      password,
      statusCredential,
    } = credentialLike;

    const $username = new Username(username);
    const $password = new Password(password, encriptPassword);
    return new AuthEntity(
      id_credential,
      id_enterprise,
      id_person,
      $username,
      $password,
      statusCredential
    );
  }

  public changePassword(newPassword: string) {
    this.password = new Password(newPassword, true);
  }

  public compareBothsPasswords(passwordForm: string) {
    const passwordsAreEquals = Password.comparePasswords(
      passwordForm,
      this.password
    );

    if (!passwordsAreEquals) {
      throw new PasswordsNotEqualsException(
        ErrorMessages.CredentialsAreNotEquals
      );
    }
  }

  public blockedUsername() {
    this.statusCredential = StatusCredential.Blocked;
  }

  public get Password(): Password {
    return this.password;
  }

  public set Password(password: Password) {
    this.password = password;
  }

  public get Username(): Username {
    return this.username;
  }

  public get IdEnterprise(): number {
    return this.id_enterprise;
  }

  public get IdPerson(): number {
    return this.id_person;
  }

  public get IdCredential(): number {
    return this.id_credential;
  }

  public get StatusCredential(): StatusCredential {
    return this.statusCredential;
  }
}
