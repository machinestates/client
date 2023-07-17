import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const connectPhantomWalletAction = createAction(
  ActionTypes.CONNECT_PHANTOM_WALLET,
);

export const connectPhantomWalletSuccessAction = createAction(
  ActionTypes.CONNECT_PHANTOM_WALLET_SUCCESS,
  props<{ publicKey: string }>()
);

export const connectPhantomWalletFailureAction = createAction(
  ActionTypes.CONNECT_PHANTOM_WALLET_FAILURE
);