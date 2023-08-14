import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const setPublicKeyAction = createAction(
  ActionTypes.SET_PUBLIC_KEY,
  props<{ publicKey: string }>()
);
