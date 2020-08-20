import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import { UserServiceMock } from './user.service.mock';
import { IUser } from 'src/app/models/user';
import { of } from 'rxjs';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;
  const users: IUser[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
      ]
    });
    userService = TestBed.inject(UserService);
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should call getUsers', () => {
    spyOn(userService, 'getUsers').withArgs(1).and.returnValue(of(users));
    userService.getUsers(1).subscribe(response => {
      expect(response).toEqual([]);
      expect(userService.getUsers).toHaveBeenCalled();
    })
  });
});
