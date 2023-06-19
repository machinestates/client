import { createAction, props } from "@ngrx/store";

import { ActionTypes } from '../action-types';

import { SignupRequestInterface } from 'src/app/types/auth/signup-request.interface';
import { CurrentUserInterface } from 'src/app/types/auth/current-user.interface';
import { AuthErrorInterface } from 'src/app/types/auth/auth-error.interface';


export const signupAction = createAction(
  ActionTypes.SIGNUP,
  props<{ request: SignupRequestInterface }>()
);

export const signupSuccessAction = createAction(
  ActionTypes.SIGNUP_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const signupFailureAction = createAction(
  ActionTypes.SIGNUP_FAILURE,
  props<{error: AuthErrorInterface }>()
);
