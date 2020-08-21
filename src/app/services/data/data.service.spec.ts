import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user/user.service';
import { UserServiceMock } from 'src/app/services/user/user.service.mock';
import { DataService } from 'src/app/services/data/data.service';
import { DataServiceMock } from 'src/app/services/data/data.service.mock';
import { makeApiResponse, IApiResponse } from 'src/app/models/api-response';
import { of } from 'rxjs';

describe('DataService', () => {
  let userService: UserService;
	let dataService: DataService;
	
	const url = `page=1`;
	const apiResponse = makeApiResponse();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: DataService, useClass: DataServiceMock },
      ]
    });
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    dataService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should call "get" from dataService', () => {
    spyOn(dataService, 'get').and.returnValue(of(apiResponse));
    dataService.get<IApiResponse>(url);
    expect(dataService.get).toHaveBeenCalledWith(url);
  });
});
