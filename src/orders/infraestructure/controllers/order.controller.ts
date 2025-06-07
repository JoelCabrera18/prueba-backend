import { Request as req, Response as res } from "express";
import { MSSQLDatabase } from "../../../utils/classes/mssql-database.util";
import { OrderService } from "../../aplication/services/order.service";
import { MSSQLOrderRepository } from "../repositories/mssql-order.repository";
import { OrderEntity } from "../../domain/entities/order.entity";

export class OrderController {
  private orderService: OrderService;

  constructor() {
    const datatabase = new MSSQLDatabase();
    const orderRepository = new MSSQLOrderRepository(datatabase);

    this.orderService = new OrderService(orderRepository);
  }

  // Pregunta 1
  get_all_orders = async (req: req, res: res) => {
    try {
      const orders = await this.orderService.get_all_orders();

      // console.log(orders); // se espera ver un array de tipo OrderEntity

      res.status(200).json(orders);
    } catch (error: any) {
      res.status(204).json([]);
    }
  };
}
