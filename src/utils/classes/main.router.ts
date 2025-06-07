import { Router } from "express";
import orderRouter from "../../orders/infraestructure/routes/order.router";
import customerRouter from "../../customers/infraestructure/routes/customer.router";
import authRoutes from "../../auth/infraestructure/routes/auth.routes";

class MainRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.config();
  }
  private config() {
    this.router.use("/orders", orderRouter);
    this.router.use("/contacts", customerRouter);
    this.router.use("/auth", authRoutes);
  }

  public routes(): Router {
    return this.router;
  }
}
const mainRoutes = new MainRouter();
export default mainRoutes.routes();
