import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

import { GameInterface } from "src/app/types/trade/game.interface";
import { TradeErrorInterface } from "src/app/types/trade/trade-error.interface";

export const payDebtAction = createAction(
  ActionTypes.PAY_DEBT,
  props<{ amount: number, uuid: string }>()
);

export const payDebtSuccessAction = createAction(
  ActionTypes.PAY_DEBT_SUCCESS,
  props<{ game: GameInterface }>()
);

export const payDebtFailureAction = createAction(
  ActionTypes.PAY_DEBT_FAILURE,
  props<{error: TradeErrorInterface }>()
);
