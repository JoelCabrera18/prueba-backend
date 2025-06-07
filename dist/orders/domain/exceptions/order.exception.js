"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderException = void 0;
class OrderException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.OrderException = OrderException;
