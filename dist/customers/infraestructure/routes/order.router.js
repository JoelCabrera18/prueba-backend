"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
class OrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new order_controller_1.OrderController();
        this.config();
    }
    config() {
        this.router.get("/", this.controller.get_all_orders);
    }
    routes() {
        return this.router;
    }
}
const orderRoutes = new OrderRouter();
exports.default = orderRoutes.routes();
