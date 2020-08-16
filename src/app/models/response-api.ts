import { IUser } from './user';

interface IInfo {
	info: {
		page: number,
		results: number,
		seed: string,
		version: string,
	}
}

interface IResults {
	results: IUser[]
}

export interface IResponseApi extends IInfo, IResults {}