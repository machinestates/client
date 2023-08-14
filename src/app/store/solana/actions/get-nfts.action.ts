import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { HttpErrorResponse } from "@angular/common/http";
import { SolanaNftInterface } from "src/app/types/solana/solana-nft.interface";

export const getNftsAction = createAction(
  ActionTypes.GET_NFTS,
  props<{ wallet: string }>()
);

export const getNftsSuccessAction = createAction(
  ActionTypes.GET_NFTS_SUCCESS,
  props<{ tokens: SolanaNftInterface[] }>()
);

export const getNftsFailureAction = createAction(
  ActionTypes.GET_NFTS_FAILURE,
  props<{ error: HttpErrorResponse }>()
);