import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";

class CustomerRouter {
  private router: Router;
  private controller: CustomerController
  constructor() {
    this.router = Router();
    this.controller = new CustomerController();
    this.config();
  }
  private config() {
    this.router.get("/:contactId", this.controller.get_customer);
  }

  public routes(): Router {
    return this.router;
  }
}
const customerRoutes = new CustomerRouter();
export default customerRoutes.routes();
