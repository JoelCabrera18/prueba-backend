import { CustomerRepository } from "../../domain/repositories/customer.repository";

export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  public async get_customer(contactId: string) {
    try {
      return await this.customerRepository.get_by_id(contactId);
    } catch (error: any) {
      throw error;
    }
  }
}
