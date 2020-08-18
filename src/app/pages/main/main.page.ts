import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { IUser, IUserState, makeUserState } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { UsersState } from 'src/app/pages/main/store/users.state';
import { GetUsers, ResetUserState, SelectUser } from 'src/app/pages/main/store/users.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
  public state: IUserState = makeUserState({});

  private subscription = new Subscription();
  private pageCounter: number = 1;

  @Select(UsersState) usersState$!: Observable<IUserState>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.findUsers();
    this.subscription.add(
      this.usersState$.subscribe(state => {
        this.state = state;
      })
    )
  }

  get showResetButton(): boolean {
    return this.state && !this.state.isLoading;
  }

  get showSpinner(): boolean {
    return this.state && this.state.isLoading;
  }

  get totalUsers(): string {
    return this.state && `(${this.state.users.length || '..'})`;
  }

  public openUserDetais(user: IUser): void {
    this.store.dispatch(new SelectUser({ user })).subscribe();
    this.router.navigate(['user-details'], { relativeTo: this.route });
  }

  public findUsers() {
    this.store.dispatch(new GetUsers({ page: this.pageCounter })).subscribe();
  }

  public showMore(): void {
    this.pageCounter++;
    this.store.dispatch(new GetUsers({ page: this.pageCounter })).subscribe();
  }
  
  public reset(): void {
    this.pageCounter = 1;
    this.store.dispatch(new ResetUserState()).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
