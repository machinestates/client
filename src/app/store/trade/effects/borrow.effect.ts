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
import { borrowAction, borrowFailureAction, borrowSuccessAction } from "../actions/borrow.action";


@Injectable()
export class BorrowEffect {  
  borrow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(borrowAction),
      switchMap(async ({ uuid, amount }) => {
        await this.loadingService.present('Borrowing Debt...');
        return { uuid, amount };
      }),
      switchMap(({ uuid, amount }) => {
        return this.gameService.borrow(uuid, amount).pipe(
          map((game: GameInterface) => {
            return borrowSuccessAction({ game })
          }),
          tap((state) => {
            this.alertService.error([
              `You have borrowed $${amount} from PLASMADEBT.`,
              'Begin making payments as soon as possible.'
            ], 75);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error borrowing debt. Try again.`,
            ]);
            return of(borrowFailureAction({ error: errorResponse }))
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
