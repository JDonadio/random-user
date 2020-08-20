import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserDetailsPage } from './user-details.page';
import { makeUser, IUserName, ILocation } from 'src/app/models/user';
import { Store, NgxsModule } from '@ngxs/store';
import { UsersState } from 'src/app/pages/main/store/users.state';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('UserDetailsPage', () => {
  let component: UserDetailsPage;
  let fixture: ComponentFixture<UserDetailsPage>;
  let store: Store;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ UserDetailsPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          UsersState,
        ]),
      ],
      providers: [
        { provide: DatePipe, useClass: DatePipe },
        Store,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsPage);
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    component.user = makeUser({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call findUsers() and subscribe to state', () => {
    spyOn(component.subscription, 'add');
    component.ngOnInit();
    expect(component.subscription.add).toHaveBeenCalled();
  });

  it('should return "" for userName if user is not defined', () => {
    component.user = null;
    expect(component.userName).toEqual('');
  });

  it('should return last name and first name for userName', () => {
    const auxUserName: IUserName = { title: 'Mr', first: 'Lionel', last: 'Messi' };
    component.user.name = auxUserName;
    expect(component.userName).toEqual('Lionel Messi');
  });

  it('should return "" for location if user is not defined', () => {
    component.user = null;
    expect(component.composedLocation).toEqual('');
  });

  it('should return "Tucuman, Argentina" for composedLocation', () => {
    const auxUserLocation: ILocation = { city: 'Tucuman', country: 'Argentina', state: null, street: null };
    component.user.location = auxUserLocation;
    expect(component.composedLocation).toEqual('Tucuman, Argentina');
  });

  it('should unsubscribe from the state once onDestroy is called', () => {
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  })
});
