import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
	providedIn: 'root'
})
export class UserServiceMock {

	constructor() { }

	getUsers(page: number): Observable<IUser[]> {
		return new Observable();
	}
}
