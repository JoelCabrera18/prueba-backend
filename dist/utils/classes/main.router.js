"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_router_1 = __importDefault(require("../../orders/infraestructure/routes/order.router"));
const customer_router_1 = __importDefault(require("../../customers/infraestructure/routes/customer.router"));
const auth_routes_1 = __importDefault(require("../../auth/infraestructure/routes/auth.routes"));
class MainRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.use("/orders", order_router_1.default);
        this.router.use("/contacts", customer_router_1.default);
        this.router.use("/auth", auth_routes_1.default);
    }
    routes() {
        return this.router;
    }
}
const mainRoutes = new MainRouter();
exports.default = mainRoutes.routes();
