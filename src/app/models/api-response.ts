import { IUser } from './user';

export interface IHttpError {
	message: string;
}

export interface IApiResponse {
	info: {
		page: number,
		results: number,
		seed: string,
		version: string,
	};
	results: IUser[],
}

export function makeApiResponse(): IApiResponse {
	return {
		info: {
			page: 0,
			results: 0,
			seed: '',
			version: '',
		},
		results: []
	}
}

export function makeHttpError(): IHttpError {
	return {
		message: 'An error ocurred. Please try again'
	}
}