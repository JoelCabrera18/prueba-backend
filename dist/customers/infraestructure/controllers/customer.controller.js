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
exports.CustomerController = void 0;
const mssql_database_util_1 = require("../../../utils/classes/mssql-database.util");
const customer_service_1 = require("../../aplication/services/customer.service");
const mssql_customer_repository_1 = require("../repositories/mssql-customer.repository");
class CustomerController {
    constructor() {
        // Pregunta 1
        this.get_customer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { contactId } = req.params;
                const customer = yield this.customerService.get_customer(contactId);
                res.status(200).json({
                    message: `Información del contacto con ID: ${contactId}`,
                    data: customer,
                });
            }
            catch (error) {
                res.status(404).json({
                    message: `Customer not found`,
                });
            }
        });
        const datatabase = new mssql_database_util_1.MSSQLDatabase();
        const orderRepository = new mssql_customer_repository_1.MSSQLCustomerRepository(datatabase);
        this.customerService = new customer_service_1.CustomerService(orderRepository);
    }
}
exports.CustomerController = CustomerController;
