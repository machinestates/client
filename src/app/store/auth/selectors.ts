import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/types/app-state.interface";
import { AuthStateInterface } from "src/app/types/auth/auth-state.interface";

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.error
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);

export const currentUsernameSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser?.username
);

export const avatarSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser?.avatar
);


