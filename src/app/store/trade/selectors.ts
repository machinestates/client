import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/types/app-state.interface";
import { TradeStateInterface } from "src/app/types/trade/trade-state.interface";

export const tradeFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TradeStateInterface
>('trade');

export const scoresSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.scores
);


