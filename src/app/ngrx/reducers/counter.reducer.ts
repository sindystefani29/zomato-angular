import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, create } from '../actions/counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(create, (state, {val}) => state + val)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}