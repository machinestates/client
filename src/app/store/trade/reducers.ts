import { Action, createReducer, on } from "@ngrx/store";

import { TradeStateInterface } from "src/app/types/trade/trade-state.interface";
import { getScoresAction, getScoresSuccessAction, getScoresFailureAction } from "./actions/get-scores.action";

const initialState: TradeStateInterface = {
  isSubmitting: false,
  isLoading: false,
  error: null,
  scores: null
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
  )
);

export function reducers(state: TradeStateInterface, action: Action) {
  return tradeReducer(state, action)
}
