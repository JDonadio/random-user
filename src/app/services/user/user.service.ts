import { Injectable } from '@angular/core';
import { IUserName } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public composeUserName(name: IUserName): string {
    return `${name.title} ${name.first} ${name.last}`;
  }
}
