import { ConnectionPool, PreparedStatement, TYPES } from "mssql";
import { Database } from "../interfaces/datatabase.interface";
import { config } from "dotenv";
import { ErrorMessages } from "../enums/auth/error-messages.enum";
config();

// pregunta 6, 8
export class MSSQLDatabase implements Database {
  private config: any;
  private pool: ConnectionPool;
  constructor() {
    this.config = {
      server: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS!,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: false,
        trustServerCertificate: false,
      },
    };

    this.pool = new ConnectionPool(this.config);
  }
  public async query(
    statement: string,
    params?: { [key: string]: any }
  ): Promise<any> {
    let db: PreparedStatement | null = null;
    try {
      if (!this.pool.connected) {
        await this.pool.connect();
      }
      db = new PreparedStatement(this.pool);

      if (params) {
        for (const [param, value] of Object.entries(params)) {
          db.input(param, this.get_type(value));
        }
      }

      await db.prepare(statement);

      return await db.execute(params || {});
    } catch (error: any) {
      throw new Error(ErrorMessages.FailedConnectDb);
    } finally {
      if (db) await db.unprepare();
      this.closePool();
    }
  }

  public async closePool() {
    if (this.pool.connected) {
      await this.pool.close();
    }
  }

  private get_type(value: any) {
    const type_of_value = typeof value;

    switch (type_of_value) {
      case "string":
        return TYPES.NVarChar;
      case "number":
        return TYPES.Int;
      case "boolean":
        return TYPES.Bit;
      default:
        return TYPES.NVarChar;
    }
  }
}
