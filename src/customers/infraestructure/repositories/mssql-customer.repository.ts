import { Database } from "../../../utils/interfaces/datatabase.interface";
import { CustomerEntity } from "../../domain/entities/customer.entity";
import { CustomerRepository } from "../../domain/repositories/customer.repository";
import { v4 as uuid } from "uuid";
export class MSSQLCustomerRepository implements CustomerRepository {
  private likeCustomers: any[] = [
    {
      id: 1,
      name: "John Doe",
      type: "customer",
      identifier: "e306219f-fec1-4d6f-97c2-17fd10b24b38",
    },
    {
      id: 2,
      name: "Vanesa Kartlon",
      type: "stateholder",
      identifier: "124c72e4-0f9d-4b8f-a94b-fc453a47b7ae",
    },
    {
      id: 3,
      name: "Jessika Jones",
      type: "new customer",
      identifier: "af9b499c-649c-4848-81d7-fb7fbcf3628f",
    },
  ];
  constructor(private db: Database) {
  }

  async get_by_id(contactId: string): Promise<CustomerEntity> {
    try {
      const statement = "***** Supuesto Store procedure para consultar *****";

      // suspuesta implementacion de conexion a base de datos
      // const params = {
      //   id: contactId
      // }
      // const query = await this.db.query(statement, params);

      // const customer = query.recordset[0];

      // aqui vamos a tener un punto de inflexion, si la base de datos estuviera
      // implementada se recorre los datos, transformando de un simple json
      // que lucen como un cliente a un objeto que es de tipo cliente para
      // trabajar con el

      const currentCustomer = this.likeCustomers.find(
        (customer) => customer.identifier === contactId
      );

      return CustomerEntity.create(currentCustomer);
    } catch (error) {
      throw error;
    }
  }
}
