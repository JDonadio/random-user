import { Component, OnInit } from '@angular/core';
import { IUser, IUserState, makeUser } from 'src/app/models/user';
import { Store, Select } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { UsersState } from 'src/app/pages/main/store/users.state';
import { SelectUser, UpdateUserAvatar } from 'src/app/pages/main/store/users.actions';
import { DatePipe } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  public user: IUser = makeUser({});
  public dob: string = '';

  private subscription = new Subscription();

  @Select(UsersState) usersState$!: Observable<IUserState>;

  constructor(
    private store: Store,
    private datePipe: DatePipe,
    private camera: Camera,
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
    const {first, last} = this.user.name;
    return `${first} ${last}`;
  }

  get composedLocation() {if (!this.user) return;
    const {location} = this.user;
    return `${location.city}, ${location.country}`;
  }

  public takePhoto(): void {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }

    this.camera.getPicture(options).then((imageData) => {
      const pic = 'data:image/jpeg;base64,' + imageData;
      this.store.dispatch(new UpdateUserAvatar({ 
        localPicture: pic,
        idName: this.user.id.name,
        idValue: this.user.id.value
      })).subscribe();
    }, (err) => {
      console.log('# Error al capturar la imagen', err);
        this.store.dispatch(new UpdateUserAvatar({
          localPicture: 'assets/shapes.svg',
          idName: this.user.id.name,
          idValue: this.user.id.value
        })).subscribe();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
