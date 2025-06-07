"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSSQLOrderRepository = void 0;
const order_entity_1 = require("../../domain/entities/order.entity");
class MSSQLOrderRepository {
    constructor(db) {
        this.db = db;
        this.likeOrders = [
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
    }
    get_all_orders() {
        return __awaiter(this, void 0, void 0, function* () {
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
                    return order_entity_1.OrderEntity.createOrder(order);
                });
                return $orders;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.MSSQLOrderRepository = MSSQLOrderRepository;
