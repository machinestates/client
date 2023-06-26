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
import { SmartAudioService } from "src/app/services/smart-audio.service";


@Injectable()
export class BuyCoinEffect {  
  buyCoin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(buyCoinAction),
      switchMap(async ({ uuid, coin }) => {
        await this.loadingService.present('Buying...');
        return { uuid, coin };
      }),
      switchMap(({ uuid, coin }) => {
        return this.gameService.buyCoin(uuid, coin).pipe(
          map((game: GameInterface) => {
            return buyCoinSuccessAction({ game })
          }),
          tap((state) => {
            this.smartAudioService.play('buy');
            this.alertService.success([
              `You have successfully bought ${coin.buyQuantity} ${coin.name} for a total of $${coin.buyQuantity * coin.price}.`,
              `Your FIATCOIN balance is now $${state.game.inventory.fiatcoin}.`
            ], 85);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error buying ${coin.name}. Try again.`,
            ]);
            return of(buyCoinFailureAction({ error: errorResponse }))
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
