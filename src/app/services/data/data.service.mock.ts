import { Observable } from 'rxjs';

export class DataServiceMock {

	get<T>(resource: string): Observable<T> {
		return new Observable<T>();
	}
}
