import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { HttpErrorResponse } from "@angular/common/http";
import { MintedNftInterface } from "src/app/types/solana/minted-nft.interface";

export const getMintedNftAction = createAction(
  ActionTypes.GET_MINTED_NFT
);

export const getMintedNftSuccessAction = createAction(
  ActionTypes.GET_MINTED_NFT_SUCCESS,
  props<{ nft: MintedNftInterface}>()
);

export const getMintedNftFailureAction = createAction(
  ActionTypes.GET_MINTED_NFT_FAILURE,
  props<{ error: HttpErrorResponse }>()
);