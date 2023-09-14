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
import { GameAlertService } from "src/app/services/game-alert.service";
import { ModalController } from "@ionic/angular";
import { exploreAction, exploreFailureAction, exploreSuccessAction } from "../actions/explore.action";
import { GameExploreModalComponent } from "src/app/components/game-explore-modal/game-explore-modal.component";


@Injectable()
export class ExploreEffect {  
  explore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(exploreAction),
      switchMap(async ({ uuid }) => {
        await this.loadingService.present('Exploring...');
        return { uuid };
      }),
      switchMap(({ uuid }) => {
        return this.gameService.explore(uuid).pipe(
          map((game: GameInterface) => {
            return exploreSuccessAction({ game })
          }),
          tap(async (state) => {
            // Modal:
            const modal = await this.modalController.create({
              component: GameExploreModalComponent,
              componentProps: {
                found: state.game.exchange.found
              }
            });
            return await modal.present();
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error exploring exchange. Try again.`,
            ]);
            return of(exploreFailureAction({ error: errorResponse }))
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
    private loadingService: LoadingService,
    private modalController: ModalController
  ) {}
}
