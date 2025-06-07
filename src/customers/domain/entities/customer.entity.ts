export class CustomerEntity {
  constructor(public id: number, public name: string, type: TypeCustomer) {}

  public static create(likeCustomer: any) {
    if (!likeCustomer || likeCustomer === undefined)
      throw new Error("Cliente no encontrado");

    const { id, name, type } = likeCustomer;

    return new CustomerEntity(id, name, type);
  }

  // otras accione que se pueden hacer con esta entidad
}

enum TypeCustomer {
  Customer = "customer",
  StateHolder = "stateholder",
  NewCustomer = "new customer",
}
