import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";

export const completeGameAction = createAction(
  ActionTypes.COMPLETE_GAME,
  props<{ uuid: string }>());

export const completeGameSuccessAction = createAction(
  ActionTypes.COMPLETE_GAME_SUCCESS,
  props<{ game: GameInterface }>()
);

export const completeGameFailureAction = createAction(
  ActionTypes.COMPLETE_GAME_FAILURE,
  props<{error: TradeErrorInterface }>()
);
