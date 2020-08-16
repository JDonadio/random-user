import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponseApi } from 'src/app/models/response-api';
import { map } from 'rxjs/operators';
import { REQUEST } from 'src/app/utils/consts';
import { Observable, BehaviorSubject } from 'rxjs';
import { IUser, IUserState } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private results = REQUEST.RESULTS;
  private params = REQUEST.DEFAULT_PARAMS;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(page: number) {
    const url = `/api/?page=${page}seed=abc&results=${this.results}&inc=${this.params}`;
    return this.httpClient.get(url).pipe(
      map((res: IResponseApi) => {
        return res.results;
      })
    );
  }
}
