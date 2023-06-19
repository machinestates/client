import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { getScoresAction, getScoresSuccessAction, getScoresFailureAction } from "../actions/get-scores.action";
import { ScoresService } from "src/app/services/scores.service";
import { ScoresInterface } from "src/app/types/trade/scores.interface";


@Injectable()
export class GetScoresEffect {
  getScores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getScoresAction),
      switchMap(() => {
        return this.scoresService.getScores().pipe(
          map((scores: ScoresInterface) => {
            return getScoresSuccessAction({ scores })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getScoresFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private scoresService: ScoresService,
  ) {}
}
