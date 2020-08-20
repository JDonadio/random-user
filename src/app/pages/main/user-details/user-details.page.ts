import { Component, OnInit } from '@angular/core';
import { IUser, IUserState, makeUser } from 'src/app/models/user';
import { Store, Select } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { UsersState } from 'src/app/pages/main/store/users.state';
import { UpdateUserAvatar } from 'src/app/pages/main/store/users.actions';
import { DatePipe } from '@angular/common';
import { Plugins, CameraResultType, CameraSource, CameraPhoto } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  public user: IUser = makeUser({});
  public dob: string = '';
  public subscription = new Subscription();

  @Select(UsersState) usersState$!: Observable<IUserState>;

  constructor(
    private store: Store,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.usersState$.subscribe(state => {
        this.user = state.selectedUser;
        this.dob = this.datePipe.transform(state.selectedUser?.dob.date, 'LLLL dd, yyyy');
      })
    )
  }

  get userName() {
    return this.user?.name ? `${this.user.name.first} ${this.user.name.last}` : '';
  }

  get composedLocation() {
    return this.user?.location ? `${this.user.location.city}, ${this.user.location.country}` : '';
  }

  public async takePhoto() {
    let pic: CameraPhoto = null;

    try {
      pic = await Camera.getPhoto({
        quality: 100,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.store.dispatch(new UpdateUserAvatar({
        localPicture: pic.dataUrl,
        idName: this.user.id.name,
        idValue: this.user.id.value
      })).subscribe();
    } catch (error) {
      console.log('Cannot take the photo:', error);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
