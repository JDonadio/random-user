import { IUser } from 'src/app/models/user';

export class GetUsers {
	static readonly type = '[USERS] Get Users';
	constructor(public payload: { page: number }) { }
}

export class GetUsersSuccess {
	static readonly type = '[USERS] Get Users Success';
	constructor(public payload: { users: IUser[] }) { }
}

export class GetUsersFailure {
	static readonly type = '[USERS] Get Users Failure';
	constructor(public payload: { users: IUser[] }) { }
}

export class SelectUser {
	static readonly type = '[USERS] Select User';
	constructor(public payload?: { user: IUser }) { }
}

export class ResetUserState {
	static readonly type = '[USERS] Reset Users State';
	constructor() { }
}