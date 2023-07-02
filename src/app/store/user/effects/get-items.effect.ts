import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { ScoresInterface } from "src/app/types/trade/scores.interface";
import { getItemsAction, getItemsFailureAction, getItemsSuccessAction } from "../actions/get-items.action";
import { UserService } from "src/app/services/user.service";
import { ItemInterface } from "src/app/types/user/item.interface";


@Injectable()
export class GetItemsEffect {
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItemsAction),
      switchMap(() => {
        return this.userService.getItems().pipe(
          map((items: ItemInterface[]) => {
            return getItemsSuccessAction({ items })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getItemsFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
