import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList, addBook, removeBook } from '../actions/book.actions';
import { Book } from '../state/book.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book]),
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  })
);