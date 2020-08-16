import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

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
    private requestsService: RequestsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pageCounter++;
    this.subscription.add(
      this.requestsService.getPaginatedUsers(this.pageCounter).subscribe((users: IUser[]) => {
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
  }
}
