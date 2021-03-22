import { createAction, props } from '@ngrx/store';
 
export const addUser = createAction(
  '[Login Page/API] Add User',
  props<{ user }>()
);