import { createReducer, on, Action } from '@ngrx/store';

import { addUser } from '../actions/user.actions';
import { User } from '../state/user.model';

export const initialState: Readonly<User> = { data: { no_hp: '' } };

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => Object.assign({}, state, user)),
);