import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { GameService } from "src/app/services/game.service";
import { startNewGameAction, startNewGameFailureAction, startNewGameSuccessAction } from "../actions/start-new-game.action";
import { GameInterface } from "src/app/types/trade/game.interface";
import { GameAlertService } from "src/app/services/game-alert.service";


@Injectable()
export class StartNewGameEffect {
  startNewGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startNewGameAction),
      switchMap(() => {
        return this.gameService.start().pipe(
          map((game: GameInterface) => {
            return startNewGameSuccessAction({ game })
          }),
          tap((state) => {
            this.gameAlertService.start(state.game);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(startNewGameFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private gameService: GameService,
    private gameAlertService: GameAlertService
  ) {}
}
