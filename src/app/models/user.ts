export interface IUserName {
	first: string,
	last: string,
	title: string,
}

export interface IStreet {
	street: {
		name: string,
		number: number,
	}
}

export interface ILocation extends IStreet {
	city: string,
	country: string,
	state: string,
}

export interface IUserBasics {
	cell: string,
	email: string,
	composedName: string,
}

export interface IUserState {
	users: IUser[],
	selectedUser: IUser,
	isLoading: boolean,
	hasError: boolean,
}

export interface IUser extends IUserBasics {
	name: IUserName,
	location: ILocation,
	state: IUserState,
}

export function makeUserState(data: Partial<IUserState>) {
	const defaultValue: IUserState = {
		users: [],
		selectedUser: null,
		isLoading: false,
		hasError: false,
	};
	return { ...defaultValue, ...data };
}