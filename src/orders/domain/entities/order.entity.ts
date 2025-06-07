import { OrderException } from "../exceptions/order.exception";

export class OrderEntity {
  constructor(public id: number, public pair: number, public price: number) {}

  public static createOrder(likeOrder: any): OrderEntity {
    if (!likeOrder) throw new OrderException("Orden invalid");

    const { id, pair, price } = likeOrder;
    return new OrderEntity(id, pair, price);
  }
}


