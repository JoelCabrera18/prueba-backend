import { config } from "dotenv";
import express, { Application } from "express";
import mainRouter from "./utils/classes/main.router";

// pregunta 8
config();

class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.port = process.env.HOST_PORT ?? 3000;
    this.app = express();
    this.customConfig();
    this.configRoutes();
  }

  private configMiddleWares() {
    // this.app.use(morgan('dev'));
    // this.app.use(cors()); 

  }

  private configRoutes() {
    
    this.app.use("/api", mainRouter);
  }
  private customConfig() {
    this.app.set("port", this.port);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.set("json spaces", 2);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

const app = new Server();

app.start();
