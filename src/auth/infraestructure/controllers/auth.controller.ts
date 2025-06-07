import { Request as req, Response as res } from "express";

import { MSSQLDatabase } from "../../../utils/classes/mssql-database.util";
import { AuthService } from "../../application/services/auth.service";
import { LoginUseCase } from "../../application/usecases/login.usecase";
import { MSSQLAuthRepository } from "../repositories/mssql-auth.repository";
import { MSSqlPersonRepository } from "../repositories/mssql-person.repository";
import { handerAuthError } from "../../../utils/modules/error-handler.module";

export class AuthController {
  private authService: AuthService;

  constructor() {
    const datatabase = new MSSQLDatabase();
    const authRepository = new MSSQLAuthRepository(datatabase);
    const personRepository = new MSSqlPersonRepository(datatabase);

    this.authService = new AuthService(authRepository, personRepository);
  }

	// Pregunta 3 y 5
  login = async (req: req, res: res) => {
    try {
      const { username, password } = req.body;
      const credential = { username, password };

      const useCase = new LoginUseCase(this.authService);
      const login = await useCase.execute(credential);

      res.status(200).json(login);
    } catch (error: any) {
      let response = handerAuthError(error);
      // perfectamente se podria usar algun patron de diseño creacional para contruir un objeto de respuesta.
      res.status(401).json(response);
    }
  };

}
