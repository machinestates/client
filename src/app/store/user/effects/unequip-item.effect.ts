import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { AlertService } from "src/app/services/alert.service";
import { LoadingService } from "src/app/services/loading.service";
import { equipItemAction, equipItemFailureAction, equipItemSuccessAction } from "../actions/equip-item.action";
import { UserService } from "src/app/services/user.service";
import { ItemInterface } from "src/app/types/user/item.interface";
import { unequipItemAction, unequipItemFailureAction, unequipItemSuccessAction } from "../actions/unequip-item.action";


@Injectable()
export class UnequipItemEffect {  
  unequipItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unequipItemAction),
      switchMap(async ({ item }) => {
        await this.loadingService.present('Unequipping...');
        return { item};
      }),
      switchMap(({ item }) => {
        return this.userService.unequipItem(item).pipe(
          map(( items: ItemInterface[]) => {
            return unequipItemSuccessAction({ items })
          }),
          tap((state) => {
            // TODO: Update user of success, if necessary:
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(unequipItemFailureAction({ error: errorResponse }))
          }),
          tap(async () => await this.loadingService.dismiss())
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) {}
}
