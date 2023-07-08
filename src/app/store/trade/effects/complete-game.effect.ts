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
import { Store } from "@ngrx/store";
import { getCoinsAction } from "../../user/actions/get-coins.action";
import { ModalController } from "@ionic/angular";
import { GameStoryModalComponent } from "src/app/components/game-story-modal/game-story-modal.component";


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

  completeGameSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(completeGameSuccessAction),
      tap(async (state) => {
        const minted = [];
        if (state.game.minted) {
          // Refresh the coins list via action:
          this.store.dispatch(getCoinsAction());
          // Add text to success message:
          state.game.coins.forEach((coin) => {
            minted.push(`Minted ${coin.amount} ${coin.name}!`);
          });
        }
        new Vibration().vibrate(3000);
        this.smartAudioService.play('end');
        this.alertService.success([
          `This round of the TRADING SIMULATION is complete.`,
          `Your final FIATCOIN score for the round is $${state.game.score}.`
        ].concat(minted), 85);
        const modal = await this.modalController.create({
          component: GameStoryModalComponent,
          componentProps: {
            story: state.game.story,
            typeSpeed: 15
          }
        });
        await modal.present();
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private gameService: GameService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private smartAudioService: SmartAudioService,
    private store: Store,
    private modalController: ModalController
  ) {}
}
