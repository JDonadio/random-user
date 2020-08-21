import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule, Actions, ofActionDispatched } from '@ngxs/store';
import { UsersState } from './users.state';
import { UserService } from 'src/app/services/user/user.service';
import { UserServiceMock } from 'src/app/services/user/user.service.mock';
import { Observable, of, throwError } from 'rxjs';
import { GetUsers, GetUsersSuccess, GetUsersFailure, ResetUserState, SelectUser, UpdateUserAvatar } from './users.actions';
import { IUserState, makeUser } from 'src/app/models/user';
import { makeHttpError, makeApiResponse } from 'src/app/models/api-response';

describe('state', () => {
	let store: Store;
	let service: UserService;
	let actions$: Observable<any>;

	const users = [
		makeUser({ id: { name: '0', value: '0' }}),
		makeUser({ id: { name: '1', value: '1' }}),
		makeUser({ id: { name: '2', value: '2' }}),
		makeUser({ id: { name: '3', value: '3' }}),
		makeUser({ id: { name: '4', value: '4' }}),
	];
	const userLongList = [
		makeUser({ id: { name: '0', value: '0' }}),
		makeUser({ id: { name: '1', value: '1' }}),
		makeUser({ id: { name: '2', value: '2' }}),
		makeUser({ id: { name: '3', value: '3' }}),
		makeUser({ id: { name: '4', value: '4' }}),
		makeUser({ id: { name: '5', value: '5' }}),
		makeUser({ id: { name: '6', value: '6' }}),
		makeUser({ id: { name: '7', value: '7' }}),
		makeUser({ id: { name: '8', value: '8' }}),
		makeUser({ id: { name: '9', value: '9' }}),
	];
	const selectedUser = makeUser({ id: { name: '4', value: '4' } });
	const updateUserAvatar = { localPicture: 'device/avatar.jpg', idName: '4', idValue: '4' };
	const updatedUserIndex = 4;
	const httpError = makeHttpError();

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				NgxsModule.forRoot([UsersState])
			],
			providers: [
				Store,
				{ provide: UserService, useClass: UserServiceMock }
			]
		});

		store = TestBed.get(Store);
		actions$ = TestBed.get(Actions);
		service = TestBed.get(UserService);
	});

	it('GetUsers should set loading state', () => {
		store.dispatch(new GetUsers({ page: 1 }));
		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(state.isLoading).toBe(true);
	});

	it('GetUsers should dispatch GetUsersSuccess on success request', (done) => {
		spyOn(service, 'getUsers').and.returnValue(of(makeApiResponse()));
		actions$.pipe(ofActionDispatched(GetUsersSuccess)).subscribe(() => {
			done();
		});
		store.dispatch(new GetUsers({ page: 0 }));
	});

	it('GetUsers should dispatch GetUsersFailure on error request', (done) => {
		spyOn(service, 'getUsers').and.returnValue(throwError(httpError));
		actions$.pipe(ofActionDispatched(GetUsersFailure)).subscribe(() => {
			done();
		});
		store.dispatch(new GetUsers({ page: 0 }));
	});

	it('is handled after GetUsersSuccess', () => {
		store.dispatch(new GetUsersSuccess({ users }));

		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(state.isLoading).toBe(false);
		expect(state.hasError).toBe(false);
	});

	it('is handled after GetUsersFailure', () => {
		store.dispatch(new GetUsersFailure(httpError));

		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(state.isLoading).toBe(false);
		expect(state.hasError).toBe(true);
	});

	it('SelectUser with user param should set selectedUser', () => {
		store.dispatch(new SelectUser({ user: selectedUser }));

		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(state.selectedUser).toBeDefined();
		expect(state.selectedUser.id.name).toEqual('4');
		expect(state.selectedUser.id.value).toEqual('4');
	});

	it('SelectUser without param should set selectedUser as null', () => {
		store.dispatch(new SelectUser());

		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(state.selectedUser).toBeNull();
	});

	it('UpdateUserAvatar should update all picture properties for user that match id properties', () => {
		store.dispatch(new GetUsersSuccess({ users }));
		store.dispatch(new SelectUser({ user: selectedUser }));
		store.dispatch(new UpdateUserAvatar(updateUserAvatar));

		const state: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);

		expect(state.selectedUser).toBeDefined();
		expect(state.selectedUser.id.name).toEqual('4');
		expect(state.selectedUser.id.value).toEqual('4');
		expect(state.selectedUser.picture.thumbnail).toEqual('device/avatar.jpg');
		expect(state.selectedUser.picture.medium).toEqual('device/avatar.jpg');
		expect(state.selectedUser.picture.large).toEqual('device/avatar.jpg');
		expect(state.users[updatedUserIndex]).toBeDefined();
		expect(state.users[updatedUserIndex].id.name).toEqual('4');
		expect(state.users[updatedUserIndex].id.value).toEqual('4');
		expect(state.users[updatedUserIndex].picture.thumbnail).toEqual('device/avatar.jpg');
		expect(state.users[updatedUserIndex].picture.medium).toEqual('device/avatar.jpg');
		expect(state.users[updatedUserIndex].picture.large).toEqual('device/avatar.jpg');
	});

	it('ResetUserState should set all values of the state as default', () => {
		store.dispatch(new GetUsersSuccess({ users: userLongList }));
		store.dispatch(new SelectUser({ user: selectedUser }));

		const stateBefore: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(stateBefore.users.length).toEqual(userLongList.length);
		expect(stateBefore.selectedUser).toBeDefined();
		expect(stateBefore.selectedUser.id.name).toEqual('4');
		expect(stateBefore.selectedUser.id.value).toEqual('4');

		store.dispatch(new ResetUserState());

		const stateAfter: IUserState = store.selectSnapshot(snapshotState => snapshotState.state);
		expect(stateAfter.users.length).toEqual(users.length);
		expect(stateAfter.selectedUser).toBeNull();
	});
});
