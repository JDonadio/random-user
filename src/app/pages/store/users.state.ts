import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { GetUsers, GetUsersSuccess, GetUsersFailure, ResetUserState } from './users.actions';
import { IUserState, makeUserState } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { catchError, map } from 'rxjs/operators';
import { REQUEST } from 'src/app/utils/consts';

@State<IUserState>({
	name: 'users',
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
}