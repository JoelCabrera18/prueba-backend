import { Router } from "express";
import { OrderController } from "../controllers/order.controller";

class OrderRouter {
  private router: Router;
  private controller: OrderController;
  constructor() {
    this.router = Router();
    this.controller = new OrderController();
    this.config();
  }
  private config() {
    this.router.get("/", this.controller.get_all_orders);
  }

  public routes(): Router {
    return this.router;
  }
}
const orderRoutes = new OrderRouter();
export default orderRoutes.routes();
