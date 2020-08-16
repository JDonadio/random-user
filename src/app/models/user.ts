export interface IUserName {
	first: string,
	last: string,
	title: string,
}

export interface IStreet {
	name: string,
	number: number,
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
	state: {
		isLoading: boolean,
		hasError: boolean,
	}
}

export interface IUser extends IUserBasics, IUserState {
	name: IUserName,
	location: ILocation,
}