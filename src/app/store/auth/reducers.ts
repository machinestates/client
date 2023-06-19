import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "src/app/types/auth/auth-state.interface";
import { signupAction, signupFailureAction, signupSuccessAction } from "./actions/signup.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  error: null,
  isLoggedIn: null
}

const authReducer = createReducer(
  initialState,
  on(
    signupAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null
    })
  ),
  on(
    signupSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    signupFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
