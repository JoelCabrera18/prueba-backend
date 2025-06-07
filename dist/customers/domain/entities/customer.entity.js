"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEntity = void 0;
class CustomerEntity {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
    }
    static create(likeCustomer) {
        if (!likeCustomer || likeCustomer === undefined)
            throw new Error("Cliente no encontrado");
        const { id, name, type } = likeCustomer;
        return new CustomerEntity(id, name, type);
    }
}
exports.CustomerEntity = CustomerEntity;
var TypeCustomer;
(function (TypeCustomer) {
    TypeCustomer["Customer"] = "customer";
    TypeCustomer["StateHolder"] = "stateholder";
    TypeCustomer["NewCustomer"] = "new customer";
})(TypeCustomer || (TypeCustomer = {}));
