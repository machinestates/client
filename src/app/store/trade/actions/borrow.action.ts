import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";

export const borrowAction = createAction(
  ActionTypes.BORROW,
  props<{ amount: number, uuid: string }>()
);

export const borrowSuccessAction = createAction(
  ActionTypes.BORROW_SUCCESS,
  props<{ game: GameInterface }>()
);

export const borrowFailureAction = createAction(
  ActionTypes.BORROW_FAILURE,
  props<{error: TradeErrorInterface }>()
);
