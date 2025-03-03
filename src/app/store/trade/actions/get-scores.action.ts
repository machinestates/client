import { createAction, props } from "@ngrx/store";
import { ActionTypes } from '../action-types';

import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";
import { ScoresInterface } from "src/app/types/trade/scores.interface";

/**
 * GET SCORES
 */
export const getScoresAction = createAction(
  ActionTypes.GET_SCORES
);

export const getScoresSuccessAction = createAction(
  ActionTypes.GET_SCORES_SUCCESS,
  props<{ scores: ScoresInterface }>()
);

export const getScoresFailureAction = createAction(
  ActionTypes.GET_SCORES_FAILURE,
  props<{error: TradeErrorInterface }>()
);