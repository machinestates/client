import { Action, createReducer, on } from "@ngrx/store";

import { TradeStateInterface } from "src/app/types/trade/trade-state.interface";
import { getScoresAction, getScoresSuccessAction, getScoresFailureAction } from "./actions/get-scores.action";
import { startNewGameAction, startNewGameFailureAction, startNewGameSuccessAction } from "./actions/start-new-game.action";
import { sellCoinAction, sellCoinFailureAction, sellCoinSuccessAction } from "./actions/sell-coin.action";
import { travelAction, travelFailureAction, travelSuccessAction } from "./actions/travel.action";
import { payDebtAction, payDebtFailureAction, payDebtSuccessAction } from "./actions/pay-debt.action";
import { buyCoinAction, buyCoinFailureAction, buyCoinSuccessAction } from "./actions/buy-coin.action";

const initialState: TradeStateInterface = {
  isSubmitting: false,
  inProgress: false,
  isLoading: false,
  error: null,
  scores: null,
  game: null,
  actionPending: false
}

const tradeReducer = createReducer(
  initialState,
  on(
    getScoresAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getScoresSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      scores: action.scores
    })
  ),
  on(
    getScoresFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    startNewGameAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    startNewGameSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      inProgress: true,
      isLoading: false,
      game: action.game
    })
  ),
  on(
    startNewGameFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    sellCoinAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      actionPending: true,
      error: null
    })
  ),
  on(
    sellCoinSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      actionPending: false,
      isLoading: false,
      game: action.game
    })
  ),
  on(
    sellCoinFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      actionPending: false,
      error: action.error
    })
  ),
  on(
    buyCoinAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      actionPending: true,
      error: null
    })
  ),
  on(
    buyCoinSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      actionPending: false,
      isLoading: false,
      game: action.game
    })
  ),
  on(
    buyCoinFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      actionPending: false,
      error: action.error
    })
  ),
  on(
    travelAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      actionPending: true,
      error: null
    })
  ),
  on(
    travelSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      actionPending: false,
      isLoading: false,
      game: action.game
    })
  ),
  on(
    travelFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      actionPending: false,
      error: action.error
    })
  ),
  on(
    payDebtAction,
    (state): TradeStateInterface => ({
      ...state,
      isLoading: true,
      actionPending: true,
      error: null
    })
  ),
  on(
    payDebtSuccessAction,
    (state, action): TradeStateInterface => ({
      ...state,
      actionPending: false,
      isLoading: false,
      game: action.game
    })
  ),
  on(
    payDebtFailureAction,
    (state, action): TradeStateInterface => ({
      ...state,
      isLoading: false,
      actionPending: false,
      error: action.error
    })
  ),
);

export function reducers(state: TradeStateInterface, action: Action) {
  return tradeReducer(state, action)
}
