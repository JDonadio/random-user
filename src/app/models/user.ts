export interface IUserId {
	id: {
		name: string,
		value: string,
	}
}

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

export interface IPicture {
	picture: {
		large: string,
		medium: string,
		thumbnail: string,
	}
}

export interface IDob {
	dob: {
		date: Date,
		age: number,
	}
}

export interface IUserState {
	users: IUser[],
	selectedUser: IUser,
	isLoading: boolean,
	hasError: boolean,
}

export interface IUser extends IUserId, IPicture, IDob {
	cell: string,
	email: string,
	composedName: string,
	name: IUserName,
	location: ILocation,
	state: IUserState,
}

export function makeUser(data: Partial<IUser>) {
	const defaultValue: IUser = {
		id: {
			name: '',
			value: '',
		},
		name: {
			title: '',
			first: '',
			last: '',
		},
		cell: '',
		composedName: '',
		dob: {
			age: 1,
			date: new Date(),
		},
		email: '',
		location: {
			city: '',
			country: '',
			state: '',
			street: {
				name: '',
				number: 1,
			}
		},
		picture: {
			thumbnail: '',
			medium: '',
			large: '',
		},
		state: makeUserState({}),
	};
	return { ...defaultValue, ...data };
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

export function updateUserPictures(data: Partial<IUser>, pic: string) {
	let defaultValue: IUser = makeUser(data);
	defaultValue.picture = {
		large: pic,
		medium: pic,
		thumbnail: pic,
	};
	return defaultValue;
}