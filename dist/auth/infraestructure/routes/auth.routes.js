"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.AuthController();
        this.config();
    }
    config() {
        this.router.post('/login', this.authController.login);
        // posibles acciones este modulo: Recuperar clave, etc
    }
    routes() {
        return this.router;
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.routes();
