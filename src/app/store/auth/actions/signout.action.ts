import { createAction  } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const signoutAction = createAction(
  ActionTypes.SIGNOUT
);