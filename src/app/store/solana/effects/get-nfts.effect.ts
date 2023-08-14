import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { CurrentUserInterface } from "src/app/types/auth/current-user.interface";
import { getNftsAction, getNftsFailureAction, getNftsSuccessAction } from "../actions/get-nfts.action";
import { SolanaService } from "src/app/services/solana.service";

@Injectable()
export class GetNftsEffect {

    getNfts$ = createEffect(() => this.actions$.pipe(
      ofType(getNftsAction),
      switchMap(({ wallet }) => {
        return this.solanaService.getTokens(wallet).pipe(
          map((tokens: any) => {
            return getNftsSuccessAction(tokens);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getNftsFailureAction({ error: errorResponse }));
          })
        )
      })
    ));

    constructor(
        private actions$: Actions,
        private solanaService: SolanaService,
    ) { }
}