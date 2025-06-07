import { Database } from "../../../utils/interfaces/datatabase.interface";
import { AuthEntity } from "../../domain/entities/auth.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Username } from "../../domain/value-objects/username.object";

export class MSSQLAuthRepository implements AuthRepository {
	/**
	 * credianciales en texto plano
	 * credential 1: joel123
	 * credential 2: joel1234
	 * credential 3: joel12345
	 * 
	 */
  private credentials: any[] = [
    {
      id_credential: 1,
      id_enterprise: 1,
      id_person: 1,
      username: "joelcabrera78",
      password: "$2b$10$pLHTa1Ex2Ax/duOzDsXiSOyR9Ci2vtI97mtJzaDT3jiHMdk/opUfm",
      statusCredential: 1,
    },
    {
      id_credential: 2,
      id_enterprise: 1,
			id_person: 2,
      username: "joeldavid78",
      password: "$2b$10$J3hnNvSth2wa1yq1clHPKOxOekc0YqmQGW2DyhIhspRBwfy8zTi5W",
      statusCredential: 1,
    },
    {
      id_credential: 2,
      id_enterprise: 1,
			id_person: 3,
      username: "joeldavid72",
      password: "$2b$10$iA8tybzuzQ4t32QJvdUaG.GF4QLG8u1vX3uqZWmdp1hi/730boXfa",
      statusCredential: 2,
    },
  ];
  constructor(private db: Database) {}
  async get_credential(user: Username): Promise<AuthEntity> {
    try {
      //? supuesto caso de que se tenga implementada la base de datos, asi se veria el procedimiento
      // const params = {
      //   username: user.username,
      // };

      // const statement = "EXEC Auth.get_credential @username";

      // const query = await this.db.query(statement, params);

      // const credentialLike = query.recordset[0];

      const credentialLike = this.credentials.find(
        (credential) => credential.username === user.username
      );

      return AuthEntity.createCredential(credentialLike);
    } catch (error) {
      throw error;
    }
  }
}
