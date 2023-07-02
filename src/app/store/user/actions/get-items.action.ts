import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { ItemInterface } from "src/app/types/user/item.interface";
import { UserErrorInterface } from "src/app/types/user/user-error.interface";


export const getItemsAction = createAction(
  ActionTypes.GET_ITEMS
);

export const getItemsSuccessAction = createAction(
  ActionTypes.GET_ITEMS_SUCCESS,
  props<{ items: ItemInterface[] }>()
);

export const getItemsFailureAction = createAction(
  ActionTypes.GET_ITEMS_FAILURE,
  props<{error: UserErrorInterface }>()
);