import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { CoinInterface } from "src/app/types/user/coin.interface";
import { UserErrorInterface } from "src/app/types/user/user-error.interface";


export const getCoinsAction = createAction(
  ActionTypes.GET_COINS
);

export const getCoinsSuccessAction = createAction(
  ActionTypes.GET_COINS_SUCCESS,
  props<{ coins: CoinInterface[] }>()
);

export const getCoinsFailureAction = createAction(
  ActionTypes.GET_COINS_FAILURE,
  props<{error: UserErrorInterface }>()
);