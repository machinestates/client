import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/types/app-state.interface";
import { TradeStateInterface } from "src/app/types/trade/trade-state.interface";
import { UserStateInterface } from "src/app/types/user/user-state.interface";

export const userFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UserStateInterface
>('user');

export const itemsSelector = createSelector(
  userFeatureSelector,
  (userState: UserStateInterface) => userState.items
);
