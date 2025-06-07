"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
const order_exception_1 = require("../exceptions/order.exception");
class OrderEntity {
    constructor(id, pair, price) {
        this.id = id;
        this.pair = pair;
        this.price = price;
    }
    static createOrder(likeOrder) {
        if (!likeOrder)
            throw new order_exception_1.OrderException("Orden invalid");
        const { id, pair, price } = likeOrder;
        return new OrderEntity(id, pair, price);
    }
}
exports.OrderEntity = OrderEntity;
