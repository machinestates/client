import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { GameService } from "src/app/services/game.service";
import { GameInterface } from "src/app/types/trade/game.interface";
import { AlertService } from "src/app/services/alert.service";
import { LoadingService } from "src/app/services/loading.service";
import { buyCoinAction, buyCoinFailureAction, buyCoinSuccessAction } from "../actions/buy-coin.action";
import { payDebtAction, payDebtFailureAction, payDebtSuccessAction } from "../actions/pay-debt.action";


@Injectable()
export class PayDebtEffect {  
  payDebt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(payDebtAction),
      switchMap(async ({ uuid, amount }) => {
        await this.loadingService.present('Paying Debt...');
        return { uuid, amount };
      }),
      switchMap(({ uuid, amount }) => {
        return this.gameService.payDebt(uuid, amount).pipe(
          map((game: GameInterface) => {
            return payDebtSuccessAction({ game })
          }),
          tap((state) => {
            this.alertService.success([
              `You have paid $${amount} to PLASMADEBT.`,
              `Your debt is now $${state.game.inventory.debt}!`
            ], 75);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error paying debt. Try again.`,
            ]);
            return of(payDebtFailureAction({ error: errorResponse }))
          }),
          tap(async () => await this.loadingService.dismiss())
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private gameService: GameService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}
}
