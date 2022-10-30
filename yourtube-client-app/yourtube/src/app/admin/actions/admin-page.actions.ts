import { createAction, props } from '@ngrx/store';
import { Item } from '../../core/interfaces/Item';
import { NewAdminItem } from '../../core/interfaces/NewAdminItem';

export const createItem = createAction(
  '[Admin Page] Create Item]',
  props<{item: NewAdminItem}>(),
);

export const getItemsAdmin = createAction(
  '[Admin Page] Items Get Successfully]',
  props<{item: Item[]}>(),
);
