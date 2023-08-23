import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { getMintedNftAction, getMintedNftSuccessAction, getMintedNftFailureAction } from "../actions/get-minted-nft.action";
import { SolanaService } from "src/app/services/solana.service";

@Injectable()
export class GetMintedNftEffect {

    getMintedNft$ = createEffect(() => this.actions$.pipe(
      ofType(getMintedNftAction),
      switchMap(() => {
        return this.solanaService.getMintedNft().pipe(
          map((nft: any) => {
            return getMintedNftSuccessAction(nft);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getMintedNftFailureAction({ error: errorResponse }));
          })
        )
      })
    ));

    constructor(
        private actions$: Actions,
        private solanaService: SolanaService,
    ) { }
}