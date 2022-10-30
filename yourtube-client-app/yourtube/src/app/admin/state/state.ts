import { NgModule } from '@angular/core';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import * as fromReducer from '../reducers/admin.reducer';

export interface State {
  items: fromReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  items: fromReducer.reducer,
};
export const metaReducers: MetaReducer<State>[] = [];
@NgModule({
  imports: [StoreModule.forFeature('items', reducers, { metaReducers })],
})

export class StateItemsModule {}
