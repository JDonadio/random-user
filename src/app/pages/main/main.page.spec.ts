import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MainPage } from './main.page';
import { makeUserState, makeUser } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Store, NgxsModule } from '@ngxs/store';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersState } from './store/users.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainPage', () => {
  let component: MainPage;
  let store: Store;
  let router: Router;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          UsersState,
        ]),
      ],
      providers: [
        Store,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    router = TestBed.get(Router);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call findUsers() and subscribe to state', () => {
    spyOn(component, 'findUsers');
    spyOn(component.subscription, 'add');
    component.ngOnInit();
    expect(component.findUsers).toHaveBeenCalled();
    expect(component.subscription.add).toHaveBeenCalled();
  });

  it('should return null for showResetButton if state is not defined', () => {
    component.state = null;
    expect(component.showResetButton).toBeNull();
  });

  it('should return false for showResetButton if state is defined but it is loading', () => {
    component.state = makeUserState({});
    component.state.isLoading = true;
    expect(component.showResetButton).toBeFalse();
  });

  it('should return true for showResetButton if state is defined and it is not loading', () => {
    component.state = makeUserState({});
    component.state.isLoading = false;
    expect(component.showResetButton).toBeTrue();
  });

  it('should return null for showSpinner if state is not defined', () => {
    component.state = null;
    expect(component.showSpinner).toBeNull();
  });

  it('should return false for showSpinner if state is defined but it is loading', () => {
    component.state = makeUserState({});
    component.state.isLoading = true;
    expect(component.showSpinner).toBeTrue();
  });

  it('should return false for showSpinner if state is defined and it is not loading', () => {
    component.state = makeUserState({});
    component.state.isLoading = false;
    expect(component.showSpinner).toBeFalse();
  });

  it('should return ".." for totalUsers if state is not defined', () => {
    component.state = null;
    expect(component.totalUsers).toEqual('..');
  });

  it('should return ".." for totalUsers if state is defined but users is null', () => {
    component.state = makeUserState({});
    component.state.users = null;
    expect(component.totalUsers).toEqual('..');
  });

  it('should return ".." for totalUsers if state is defined but has no users', () => {
    component.state = makeUserState({});
    component.state.users = [];
    expect(component.totalUsers).toEqual('..');
  });

  it('should return 5 for totalUsers if state is defined and has 5 users', () => {
    component.state = makeUserState({});
    component.state.users = [
      makeUser({}),
      makeUser({}),
      makeUser({}),
      makeUser({}),
      makeUser({}),
    ];
    expect(component.totalUsers).toEqual(5);
  });

  // it('should navigate to user details page', () => {
  //   spyOn(router, 'navigate');
  //   spyOn(store, 'dispatch');
  //   const user = makeUser({});
  //   component.openUserDetais(user);
  //   const route = '/main';
  //   const navExtras = { relativeTo: route };
  //   expect(router.navigate).toHaveBeenCalledWith(['user-details'], navExtras);
  // });

  it('should increment pageCounter by 1 if showMore is called', () => {
    spyOn(store, 'dispatch');
    component.pageCounter = 0;
    component.showMore();
    expect(component.pageCounter).toEqual(1);
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should unsubscribe from the state once onDestroy is called', () => {
    spyOn(component.subscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  })
});
