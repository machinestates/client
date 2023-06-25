import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { GameService } from "src/app/services/game.service";
import { GameInterface } from "src/app/types/trade/game.interface";
import { sellCoinAction, sellCoinFailureAction, sellCoinSuccessAction } from "../actions/sell-coin.action";
import { AlertService } from "src/app/services/alert.service";
import { LoadingService } from "src/app/services/loading.service";
import { travelAction, travelFailureAction, travelSuccessAction } from "../actions/travel.action";
import { GameAlertService } from "src/app/services/game-alert.service";


@Injectable()
export class TravelEffect {  
  travel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(travelAction),
      switchMap(async ({ uuid, exchange }) => {
        await this.loadingService.present('Traveling...');
        return { uuid, exchange };
      }),
      switchMap(({ uuid, exchange }) => {
        return this.gameService.travel(uuid, exchange).pipe(
          map((game: GameInterface) => {
            return travelSuccessAction({ game })
          }),
          tap((state) => {
            this.gameAlertService.travel(state.game);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error traveling to exchange. Try again.`,
            ]);
            return of(travelFailureAction({ error: errorResponse }))
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
    private gameAlertService: GameAlertService,
    private loadingService: LoadingService
  ) {}
}
