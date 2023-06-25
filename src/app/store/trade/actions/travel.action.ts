import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";
import { GameExchangeInterface } from "src/app/types/trade/game-exchange.interface";


export const travelAction = createAction(
  ActionTypes.TRAVEL,
  props<{ exchange: GameExchangeInterface, uuid: string }>()
);

export const travelSuccessAction = createAction(
  ActionTypes.TRAVEL_SUCCESS,
  props<{ game: GameInterface }>()
);

export const travelFailureAction = createAction(
  ActionTypes.TRAVEL_FAILURE,
  props<{error: TradeErrorInterface }>()
);
