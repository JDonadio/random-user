import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserName, IUserState, makeUserState, IUser } from 'src/app/models/user';
import { REQUEST } from 'src/app/utils/consts';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponseApi } from 'src/app/models/response-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public subject = new BehaviorSubject<IUserState>(makeUserState({}));

  private results = REQUEST.RESULTS;
  private params = REQUEST.DEFAULT_PARAMS;

  constructor(
    private httpClient: HttpClient,
  ) { }

  // public composeUserName(name: IUserName): string {
  //   return `${name.title} ${name.first} ${name.last}`;
  // }

  updateUserState(data: Partial<IUserState>) {
    this.subject.next(
      makeUserState({
        ...this.getUserState().value,
        ...data
      })
    );
  }

  getUserState(): BehaviorSubject<IUserState> {
    return this.subject;
  }

  getUsers(page: number): Observable<IUser[]> {
    const url = `/api/?page=${page}seed=abc&results=${this.results}&inc=${this.params}`;
    return this.httpClient.get(url).pipe(
      map((res: IResponseApi) => {
        return res.results;
      })
    );
  }

  findUsers(categoryId: string): void {
    this.updateUserState({ isLoading: true });
    this.getUsers()
      .subscribe((res: IUsersResponse) => {
        if (res.success) {
          this.updateUserState({
            services: res.data,
            searchedServices: true,
            loading: false,
            hasServiceError: false
          });
        } else {
          this.updateUserState({ isLoading: false, hasError: true });
        }
      }, () => {
        this.updateUserState({ isLoading: false, hasError: true });
      })
  }

  resetState() {
    this.updateUserState(makeUserState({}));
  }
}
