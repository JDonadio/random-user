import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/user';
import { REQUEST } from 'src/app/utils/consts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponseApi } from 'src/app/models/response-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private results = REQUEST.RESULTS;
  private params = REQUEST.DEFAULT_PARAMS;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(page: number): Observable<IUser[]> {
    const url = `https://randomuser.me/api/?page=${page}seed=abc&results=${this.results}&inc=${this.params}`;

    return this.httpClient.get(url).pipe(
      map((res: IResponseApi) => {
        return res.results;
      })
    );
  }
}
