import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
  public userList: any = [];

  private subscription = new Subscription();
  private pageCounter: number = 1;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.subscription.add(
      this.userService.getUsers(this.pageCounter).subscribe((users: IUser[]) => {
        this.userList = [...this.userList.concat(users)];
        console.log('this.userList:', users)
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openUserDetais(user: IUser): void {
    console.log(user)
    const navigationExtras: NavigationExtras = {
      queryParams: { user },
      relativeTo: this.route,
    };
    this.router.navigate(['user-details'], navigationExtras);
  }

  public showMore(): void {
    this.pageCounter++;
    this.getUsers();
  }
}
