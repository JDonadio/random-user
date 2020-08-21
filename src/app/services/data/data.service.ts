import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(
		private httpClient: HttpClient,
	) { }

	public get<T>(resource: string): Observable<T> {
		return this.httpClient.get<T>(resource).pipe(
			catchError(err => throwError(err))
		)
	}
}
