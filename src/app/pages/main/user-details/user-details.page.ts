import { Component, OnInit } from '@angular/core';
import { IUser, IUserState } from 'src/app/models/user';
import { Store, Select } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { UsersState } from 'src/app/pages/main/store/users.state';
import { SelectUser } from 'src/app/pages/main/store/users.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  public user: IUser;

  private subscription = new Subscription();

  @Select(UsersState) usersState$!: Observable<IUserState>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.usersState$.subscribe(state => {
        this.user = state.selectedUser;
      })
    )
  }

  get userName() {
    if (!this.user) return;
    const {first, last} = this.user.name;
    return `${first} ${last}`;
  }

  ngOnDestroy() {
    this.store.dispatch(new SelectUser()).subscribe();
    this.subscription.unsubscribe();
  }
}
