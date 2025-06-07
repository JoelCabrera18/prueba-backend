
import { ErrorMessages } from '../../../utils/enums/auth/error-messages.enum';
import { InvalidUsernameException } from '../exceptions/invalid.username.exception';

export class Username {
	username: string;
	constructor(username: string) {
		if (username.trim().length === 0) throw new InvalidUsernameException(ErrorMessages.ErrorUsername);
		this.username = username;
	}
}
