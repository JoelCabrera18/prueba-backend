"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class OrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/all', () => { });
    }
    routes() {
        return this.router;
    }
}
const orderRoutes = new OrderRouter();
exports.default = orderRoutes.routes();
