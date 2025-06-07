import { Database } from "../../../utils/interfaces/datatabase.interface";
import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderRepository } from "../../domain/repositories/order.repository";

export class MSSQLOrderRepository implements OrderRepository {
  private likeOrders: any[] = [
    {
      id: 1,
      pair: "BTC/USD",
      price: 15222,
    },
    {
      id: 2,
      pair: "BTC/USD",
      price: 15222,
    },
    {
      id: 3,
      pair: "BTC/USD",
      price: 15222,
    },
  ];
  constructor(private db: Database) {}

  async get_all_orders(): Promise<OrderEntity[]> {
    try {
      const statement = "***** Supuesto Store procedure *****";

      // suspuesta implementacion de conexion a base de datos
      // const query = await this.db.query(statement);

      // const orders = query.recordset;

      // if (orders.length === 0) return [];

      // aqui vamos a tener un punto de inflexion, si la base de datos estuviera
      // implementada se recorre los datos, transformando de un simple json
      // que lucen como ordenes a un objeto que es de tipo ordenes para
      // trabajar con el

      const $orders = [...this.likeOrders].map((order) => {
        return OrderEntity.createOrder(order);
      });

      return $orders;
    } catch (error) {
      throw error;
    }
  }
}
