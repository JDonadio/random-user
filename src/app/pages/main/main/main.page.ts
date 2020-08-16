import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { IUser, IUserState, makeUserState } from 'src/app/models/user';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { UsersState } from '../../store/users.state';
import { GetUsers, ResetUserState } from '../../store/users.actions';

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
    this.store.dispatch(new GetUsers({ page: this.pageCounter })).subscribe();
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openUserDetais(user: IUser): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { user },
      relativeTo: this.route,
    };
    this.router.navigate(['user-details'], navigationExtras);
  }

  public showMore(): void {
    this.pageCounter++;
    this.store.dispatch(new GetUsers({ page: this.pageCounter })).subscribe();
  }

  public reset(): void {
    this.pageCounter = 1;
    this.store.dispatch(new ResetUserState()).subscribe();
  }
}
