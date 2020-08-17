import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { GetUsers, GetUsersSuccess, GetUsersFailure, ResetUserState, SelectUser, UpdateUserAvatar } from './users.actions';
import { IUserState, makeUserState, IUser, updateUserPictures } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { catchError, map } from 'rxjs/operators';
import { REQUEST } from 'src/app/utils/consts';
import { patch, updateItem } from '@ngxs/store/operators';

@State<IUserState>({
	name: 'state',
	defaults: makeUserState({})
})
@Injectable()
export class UsersState {

	constructor(
		private userService: UserService,
	) {}

	@Action(GetUsers)
	GetUsers(stateContext: StateContext<IUserState>, action: GetUsers) {
		const state = stateContext.getState();
		stateContext.setState({
			...state,
			isLoading: true,
		});

		return this.userService.getUsers(action.payload.page)
			.pipe(
				map((response) => stateContext.dispatch(new GetUsersSuccess({ users: response }))),
				catchError((error) => stateContext.dispatch(new GetUsersFailure(error)))
			)
	}

	@Action(GetUsersSuccess)
	getUsersSuccess(stateContext: StateContext<IUserState>, action: GetUsersSuccess) {
		const state = stateContext.getState();
		stateContext.setState({
			...state,
			users: [...state.users.concat(action.payload.users)],
			isLoading: false,
			hasError: false,
		});
	}

	@Action(GetUsersFailure)
	getUsersFailure(stateContext: StateContext<IUserState>) {
		const state = stateContext.getState();
		stateContext.setState({
			...state,
			isLoading: false,
			hasError: true,
		});
	}

	@Action(ResetUserState)
	resetUserState(stateContext: StateContext<IUserState>) {
		const state = stateContext.getState();
		stateContext.setState({
			...state,
			users: state.users.slice(0, REQUEST.RESULTS),
			isLoading: false,
			hasError: false,
		});
	}

	@Action(SelectUser)
	selectUser(stateContext: StateContext<IUserState>, action: SelectUser) {
		const state = stateContext.getState();
		stateContext.setState({
			...state,
			selectedUser: action.payload ? action.payload.user : null,
		});
	}

	@Action(UpdateUserAvatar)
	updateUserAvatar(stateContext: StateContext<IUserState>, action: UpdateUserAvatar) {
		const state = stateContext.getState();
		let userFound = state.users.find((user: IUser) => {
			return user.id.name === action.payload.idName && user.id.value === action.payload.idValue;
		});

		stateContext.setState(
			patch({
				users: updateItem<IUser>(user =>
					user.id.name === action.payload.idName && user.id.value === action.payload.idValue,
					updateUserPictures(userFound, action.payload.localPicture)
				),
				selectedUser: updateUserPictures(userFound, action.payload.localPicture)
			})
		);
	}
}