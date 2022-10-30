import { createReducer, on } from '@ngrx/store';
import { Item } from '../../core/interfaces/Item';
import { createItem, getItemsAdmin } from '../actions/admin-page.actions';

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: [],
};

export const reducer = createReducer(
  initialState,
  on(getItemsAdmin, createItem, (state, action) => ({
    ...state,
  })),
);
