import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponseApi } from 'src/app/models/response-api';
import { map } from 'rxjs/operators';
import { REQUEST } from 'src/app/utils/consts';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private results = REQUEST.RESULTS;
  private params = REQUEST.DEFAULT_PARAMS;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getPaginatedUsers(page: number) {
    console.log('page:', page)
    return this.httpClient.get(`/api/?page=${page}&results=${this.results}&inc=${this.params}`)
      .pipe(
        map((res: IResponseApi) => {
          return res.results || [];
        })
      );
  }
}
