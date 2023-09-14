import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";

export const exploreAction = createAction(
  ActionTypes.EXPLORE,
  props<{ uuid: string }>());

export const exploreSuccessAction = createAction(
  ActionTypes.EXPLORE_SUCCESS,
  props<{ game: GameInterface }>()
);

export const exploreFailureAction = createAction(
  ActionTypes.EXPLORE_FAILURE,
  props<{error: TradeErrorInterface }>()
);
