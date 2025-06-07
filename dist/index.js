"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const main_router_1 = __importDefault(require("./utils/classes/main.router"));
// pregunta 8
(0, dotenv_1.config)();
class Server {
    constructor() {
        var _a;
        this.port = (_a = process.env.HOST_PORT) !== null && _a !== void 0 ? _a : 3000;
        this.app = (0, express_1.default)();
        this.customConfig();
        this.configRoutes();
    }
    configMiddleWares() {
        // this.app.use(morgan('dev'));
        // this.app.use(cors()); 
    }
    configRoutes() {
        this.app.use("/api", main_router_1.default);
    }
    customConfig() {
        this.app.set("port", this.port);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.set("json spaces", 2);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
}
const app = new Server();
app.start();
