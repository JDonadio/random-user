import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getPaginatedUsers(page: number) {
    return this.httpClient.get(`/api/?page=${page}&results=5&seed=abc`);
  }
}
