import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ItemInterface } from "src/app/types/user/item.interface";
import { UserErrorInterface } from "src/app/types/user/user-error.interface";


export const equipItemAction = createAction(
  ActionTypes.EQUIP_ITEM,
  props<{ item: ItemInterface }>()
);

export const equipItemSuccessAction = createAction(
  ActionTypes.EQUIP_ITEM_SUCCESS,
  props<{ items: ItemInterface[] }>()
);

export const equipItemFailureAction = createAction(
  ActionTypes.EQUIP_ITEM_FAILURE,
  props<{error: UserErrorInterface }>()
);