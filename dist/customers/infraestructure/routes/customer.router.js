"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = require("../controllers/customer.controller");
class CustomerRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new customer_controller_1.CustomerController();
        this.config();
    }
    config() {
        this.router.get("/:contactId", this.controller.get_customer);
    }
    routes() {
        return this.router;
    }
}
const customerRoutes = new CustomerRouter();
exports.default = customerRoutes.routes();
