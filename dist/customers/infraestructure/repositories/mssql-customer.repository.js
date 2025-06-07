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
exports.MSSQLCustomerRepository = void 0;
const customer_entity_1 = require("../../domain/entities/customer.entity");
class MSSQLCustomerRepository {
    constructor(db) {
        this.db = db;
        this.likeCustomers = [
            {
                id: 1,
                name: "John Doe",
                type: "customer",
                identifier: "e306219f-fec1-4d6f-97c2-17fd10b24b38",
            },
            {
                id: 2,
                name: "Vanesa Kartlon",
                type: "stateholder",
                identifier: "124c72e4-0f9d-4b8f-a94b-fc453a47b7ae",
            },
            {
                id: 3,
                name: "Jessika Jones",
                type: "new customer",
                identifier: "af9b499c-649c-4848-81d7-fb7fbcf3628f",
            },
        ];
    }
    get_by_id(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const statement = "***** Supuesto Store procedure para consultar *****";
                // suspuesta implementacion de conexion a base de datos
                // const params = {
                //   id: contactId
                // }
                // const query = await this.db.query(statement, params);
                // const customer = query.recordset[0];
                // aqui vamos a tener un punto de inflexion, si la base de datos estuviera
                // implementada se recorre los datos, transformando de un simple json
                // que lucen como un cliente a un objeto que es de tipo cliente para
                // trabajar con el
                const currentCustomer = this.likeCustomers.find((customer) => customer.identifier === contactId);
                return customer_entity_1.CustomerEntity.create(currentCustomer);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.MSSQLCustomerRepository = MSSQLCustomerRepository;
