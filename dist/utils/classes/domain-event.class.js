"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
class DomainEvent {
    constructor() {
        this.events = [];
    }
    addEvent(event) {
        this.events.push(event);
    }
    pullEvents() {
        const events = [...this.events];
        this.events = [];
        return events;
    }
}
exports.DomainEvent = DomainEvent;
