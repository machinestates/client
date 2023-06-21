import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { SigninRequestInterface } from "src/app/types/auth/signin-request.interface";
import { CurrentUserInterface } from "src/app/types/auth/current-user.interface";
import { AuthErrorInterface } from "src/app/types/auth/auth-error.interface";

export const signinAction = createAction(
  ActionTypes.SIGNIN,
  props<{ request: SigninRequestInterface }>()
);

export const signinSuccessAction = createAction(
  ActionTypes.SIGNIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const signinFailureAction = createAction(
  ActionTypes.SIGNIN_FAILURE,
  props<{ error: AuthErrorInterface }>()
);