import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { UserService } from "src/app/services/user.service";
import { getCoinsAction, getCoinsFailureAction, getCoinsSuccessAction } from "../actions/get-coins.action";
import { CoinInterface } from "src/app/types/user/coin.interface";


@Injectable()
export class GetCoinsEffect {
  getCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoinsAction),
      switchMap(() => {
        return this.userService.getCoins().pipe(
          map((coins: CoinInterface[]) => {
            return getCoinsSuccessAction({ coins })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCoinsFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
