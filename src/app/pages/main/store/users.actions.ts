import { IUser } from 'src/app/models/user';
import { IHttpError } from 'src/app/models/api-response';

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
	constructor(public payload: IHttpError) { }
}

export class SelectUser {
	static readonly type = '[USERS] Select User';
	constructor(public payload?: { user: IUser }) { }
}

export class UpdateUserAvatar {
	static readonly type = '[USERS] Update User Avatar';
	constructor(public payload: { localPicture: string, idName: string, idValue: string }) { }
}

export class ResetUserState {
	static readonly type = '[USERS] Reset Users State';
	constructor() { }
}