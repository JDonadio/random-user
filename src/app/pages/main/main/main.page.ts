import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { Subscription } from 'rxjs';

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
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.requestsService.getPaginatedUsers(this.pageCounter).subscribe((response: any) => {
        this.userList = this.userList.concat(response.results);
        console.log('this.userList:', this.userList)
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
