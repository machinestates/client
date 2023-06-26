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
import { completeGameAction, completeGameFailureAction, completeGameSuccessAction } from "../actions/complete-game.action";
import { SmartAudioService } from "src/app/services/smart-audio.service";
import { Vibration } from "@awesome-cordova-plugins/vibration/ngx";


@Injectable()
export class CompleteGameEffect {  
  completeGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(completeGameAction),
      switchMap(async ({ uuid }) => {
        await this.loadingService.present('Completing round...');
        return { uuid };
      }),
      switchMap(({ uuid }) => {
        return this.gameService.completeGame(uuid).pipe(
          map((game: GameInterface) => {
            return completeGameSuccessAction({ game })
          }),
          tap((state) => {
            new Vibration().vibrate(3000);
            this.smartAudioService.play('end');
            this.alertService.success([
              `This round of the TRADING SIMULATION is complete.`,
              `Your final FIATCOIN score for the round is $${state.game.score}.`
            ], 85);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error completing the round. Try again.`,
            ]);
            return of(completeGameFailureAction({ error: errorResponse }))
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
