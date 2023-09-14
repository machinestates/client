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

export const gameSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.game
);

export const storySelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.game.story
);

export const inProgressSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.inProgress
);

export const actionPendingSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.actionPending
);

export const avatarImageSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.avatar.image
);

export const publicKeySelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.publicKey
);

export const tradeStateSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState
);

export const exploredSelector = createSelector(
  tradeFeatureSelector,
  (tradeState: TradeStateInterface) => tradeState.game.exchange.explored
)