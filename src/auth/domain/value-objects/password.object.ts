import { ErrorMessages } from "../../../utils/enums/auth/error-messages.enum";
import { InvalidPasswprdException } from "../exceptions/invalid.password.exception";
import bcrypt from "bcrypt";

export class Password {
  password!: string;
  constructor(password: string, encriptPassword: boolean = false) {
    if (password.trim().length === 0)
      throw new InvalidPasswprdException(ErrorMessages.InvalidPassword);

    this.password = encriptPassword ? this.encriptPassword(password) : password;
  }

  private encriptPassword(password: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    const newPassword = bcrypt.hashSync(password, salt);
    return newPassword;
  }

  public static comparePasswords(
    passwordTextPlain: string,
    passwordSaved: Password
  ) {
    return bcrypt.compareSync(passwordTextPlain, passwordSaved.password);
  }
}
