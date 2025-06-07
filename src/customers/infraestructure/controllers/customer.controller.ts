import { Request as req, Response as res } from "express";
import { MSSQLDatabase } from "../../../utils/classes/mssql-database.util";
import { CustomerEntity } from "../../domain/entities/customer.entity";
import { CustomerService } from "../../aplication/services/customer.service";
import { MSSQLCustomerRepository } from "../repositories/mssql-customer.repository";

export class CustomerController {
  private customerService: CustomerService;

  constructor() {
    const datatabase = new MSSQLDatabase();
    const orderRepository = new MSSQLCustomerRepository(datatabase);

    this.customerService = new CustomerService(orderRepository);
  }

  // Pregunta 1
  get_customer = async (req: req, res: res) => {
    try {
      const { contactId } = req.params;
      const customer = await this.customerService.get_customer(contactId);

      res.status(200).json({
        message: `Información del contacto con ID: ${contactId}`,
        data: customer,
      });
    } catch (error: any) {
      res.status(404).json({
        message: `Customer not found`,
      });
    }
  };
}
