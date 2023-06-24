import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";
import { GameCoinInterface } from "src/app/types/trade/game-coin.interface";


export const sellCoinAction = createAction(
  ActionTypes.SELL_COIN,
  props<{ coin: GameCoinInterface, uuid: string }>()
);

export const sellCoinSuccessAction = createAction(
  ActionTypes.SELL_COIN_SUCCESS,
  props<{ game: GameInterface }>()
);

export const sellCoinFailureAction = createAction(
  ActionTypes.SELL_COIN_FAILURE,
  props<{error: TradeErrorInterface }>()
);
