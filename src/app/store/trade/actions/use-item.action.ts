import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";
import { GameItemInterface } from "src/app/types/trade/game-item.interface";


export const useItemAction = createAction(
  ActionTypes.USE_ITEM,
  props<{ item: GameItemInterface, uuid: string }>()
);

export const useItemSuccessAction = createAction(
  ActionTypes.USE_ITEM_SUCCESS,
  props<{ game: GameInterface }>()
);

export const useItemFailureAction = createAction(
  ActionTypes.TRAVEL_FAILURE,
  props<{error: TradeErrorInterface }>()
);
