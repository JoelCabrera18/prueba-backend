import { Router } from 'express';

import { AuthController } from '../controllers/auth.controller';

class AuthRoutes {
	private router: Router;
	private authController: AuthController;
	constructor() {
		this.router = Router();
		this.authController = new AuthController();
		this.config();
	}
	private config() {
		this.router.post('/login', this.authController.login);
		// posibles acciones este modulo: Recuperar clave, etc
	}

	public routes(): Router {
		return this.router;
	}
}
const authRoutes = new AuthRoutes();
export default authRoutes.routes();
