import { AuthEntity } from "../entities/auth.entity";
import { Username } from "../value-objects/username.object";

export interface AuthRepository {
  get_credential(username: Username): Promise<AuthEntity>;
}
