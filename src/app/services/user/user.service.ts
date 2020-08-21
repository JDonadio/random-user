import { Injectable } from '@angular/core';
import { REQUEST } from 'src/app/utils/consts';
import { DataService } from 'src/app/services/data/data.service';
import { IApiResponse } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private results = REQUEST.RESULTS;
  private params = REQUEST.DEFAULT_PARAMS;

  constructor(
    private dataService: DataService,
  ) { }

  getUsers(page: number) {
    const url = `https://randomuser.me/api/?page=${page}seed=abc&results=${this.results}&inc=${this.params}`;
    return this.dataService.get<IApiResponse>(url);
  }
}
