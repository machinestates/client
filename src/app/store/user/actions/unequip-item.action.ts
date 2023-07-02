import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ItemInterface } from "src/app/types/user/item.interface";
import { UserErrorInterface } from "src/app/types/user/user-error.interface";


export const unequipItemAction = createAction(
  ActionTypes.UNEQUIP_ITEM,
  props<{ item: ItemInterface }>()
);

export const unequipItemSuccessAction = createAction(
  ActionTypes.UNEQUIP_ITEM_SUCCESS,
  props<{ items: ItemInterface[] }>()
);

export const unequipItemFailureAction = createAction(
  ActionTypes.UNEQUIP_ITEM_FAILURE,
  props<{error: UserErrorInterface }>()
);