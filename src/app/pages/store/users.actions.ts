import { IUser } from 'src/app/models/user';

export class GetUsers {
	static readonly type = '[USER] Get Users';
	constructor() { }
}

export class GetUsersSuccess {
	static readonly type = '[USER] Get Users Success';
	constructor(public payload: { users: IUser[] }) { }
}

export class GetUsersFailure {
	static readonly type = '[USER] Get Users Failure';
	constructor(public payload: { users: IUser[] }) { }
}