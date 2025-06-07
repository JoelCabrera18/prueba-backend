import { OrderEntity } from "../entities/order.entity";

export interface OrderRepository {
  get_all_orders(): Promise<OrderEntity[]>;
}
