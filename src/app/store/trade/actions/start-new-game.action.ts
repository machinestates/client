import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";

/**
 * START NEW GAME
 */
export const startNewGameAction = createAction(
  ActionTypes.START_NEW_GAME,
  props<{ publicKey: string; name: string; image: string; }>()
);

export const startNewGameSuccessAction = createAction(
  ActionTypes.START_NEW_GAME_SUCCESS,
  props<{ game: GameInterface }>()
);

export const startNewGameFailureAction = createAction(
  ActionTypes.START_NEW_GAME_FAILURE,
  props<{error: TradeErrorInterface }>()
);
