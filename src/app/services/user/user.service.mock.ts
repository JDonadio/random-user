import { Observable } from 'rxjs';

export class UserServiceMock {

	getUsers(page: number) {
		return new Observable();
	}
}
