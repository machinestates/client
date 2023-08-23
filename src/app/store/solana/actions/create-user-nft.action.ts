import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { MintedNftInterface } from "src/app/types/solana/minted-nft.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const createUserNftAction = createAction(
  ActionTypes.CREATE_USER_NFT,
  props<{ wallet: string, image: string }>()
);

export const createUserNftSuccessAction = createAction(
  ActionTypes.CREATE_USER_NFT_SUCCESS,
  props<{ nft: MintedNftInterface }>()
);

export const createUserNftFailureAction = createAction(
  ActionTypes.CREATE_USER_NFT_FAILURE,
  props<{error: HttpErrorResponse }>()
);