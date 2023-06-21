import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "src/app/types/auth/auth-state.interface";
import { signupAction, signupFailureAction, signupSuccessAction } from "./actions/signup.action";
import { signinAction, signinFailureAction, signinSuccessAction } from "./actions/signin.action";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/get-current-user.action";

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
  ),
  on(
    signinAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null
    })
  ),
  on(
    signinSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    signinFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
