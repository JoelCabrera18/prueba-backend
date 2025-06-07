import { OrderRepository } from "../../domain/repositories/order.repository";

export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  public async get_all_orders() {
    try {
      return await this.orderRepository.get_all_orders();
    } catch (error: any) {
      return [];
    }
  }
}
