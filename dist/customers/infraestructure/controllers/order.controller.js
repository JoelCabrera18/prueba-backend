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
exports.OrderController = void 0;
const mssql_database_util_1 = require("../../../utils/classes/mssql-database.util");
const order_service_1 = require("../../aplication/services/order.service");
const mssql_order_repository_1 = require("../repositories/mssql-order.repository");
class OrderController {
    constructor() {
        // Pregunta 1
        this.get_all_orders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield this.orderService.get_all_orders();
                // console.log(orders); // se espera ver un array de tipo OrderEntity
                res.status(200).json(orders);
            }
            catch (error) {
                res.status(204);
            }
        });
        const datatabase = new mssql_database_util_1.MSSQLDatabase();
        const orderRepository = new mssql_order_repository_1.MSSQLOrderRepository(datatabase);
        this.orderService = new order_service_1.OrderService(orderRepository);
    }
}
exports.OrderController = OrderController;
