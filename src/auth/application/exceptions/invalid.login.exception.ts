export class InvalidLoginException extends Error {
	constructor(message: string) {
		super(message);
	}
}
