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
import { SmartAudioService } from "src/app/services/smart-audio.service";


@Injectable()
export class SellCoinEffect {  
  sellCoin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sellCoinAction),
      switchMap(async ({ uuid, coin }) => {
        await this.loadingService.present('Selling...');
        return { uuid, coin };
      }),
      switchMap(({ uuid, coin }) => {
        return this.gameService.sellCoin(uuid, coin).pipe(
          map((game: GameInterface) => {
            return sellCoinSuccessAction({ game })
          }),
          tap((state) => {
            this.smartAudioService.play('sell');
            this.alertService.success([
              `You have successfully sold ${coin.sellQuantity} ${coin.name} for a total of $${coin.sellQuantity * coin.price}.`,
              `Your FIATCOIN balance is now $${state.game.inventory.fiatcoin}.`
            ], 85);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error selling ${coin.name}. Try again.`,
            ]);
            return of(sellCoinFailureAction({ error: errorResponse }))
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
    private loadingService: LoadingService,
    private smartAudioService: SmartAudioService
  ) {}
}
