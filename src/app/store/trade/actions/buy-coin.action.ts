import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";
import { GameCoinInterface } from "src/app/types/trade/game-coin.interface";


export const buyCoinAction = createAction(
  ActionTypes.BUY_COIN,
  props<{ coin: GameCoinInterface, uuid: string }>()
);

export const buyCoinSuccessAction = createAction(
  ActionTypes.SELL_COIN_SUCCESS,
  props<{ game: GameInterface }>()
);

export const buyCoinFailureAction = createAction(
  ActionTypes.SELL_COIN_FAILURE,
  props<{error: TradeErrorInterface }>()
);
