import { CustomerEntity } from "../entities/customer.entity";

export interface CustomerRepository {
  get_by_id(contactId: string): Promise<CustomerEntity>;
}
