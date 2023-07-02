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
import { SmartAudioService } from "src/app/services/smart-audio.service";
import { useItemAction, useItemFailureAction, useItemSuccessAction } from "../actions/use-item.action";
import { Store } from "@ngrx/store";
import { getItemsAction } from "../../user/actions/get-items.action";


@Injectable()
export class UseItemEffect {  
  useItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(useItemAction),
      switchMap(async ({ uuid, item }) => {
        await this.loadingService.present('Using item...');
        return { uuid, item };
      }),
      switchMap(({ uuid, item }) => {
        return this.gameService.useItem(uuid, item).pipe(
          map((game: GameInterface) => {
            this.store.dispatch(getItemsAction());
            return useItemSuccessAction({ game })
          }),
          tap((state) => {
            // TODO: Add success message
            this.alertService.success([`You have successfully used ${item.name.toUpperCase()}.`]);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.error([
              `There was an error using item. Try again.`,
            ]);
            return of(useItemFailureAction({ error: errorResponse }))
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
    private store: Store
  ) {}
}
