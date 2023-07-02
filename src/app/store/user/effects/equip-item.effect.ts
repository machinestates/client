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


@Injectable()
export class EquipItemEffect {  
  equipItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(equipItemAction),
      switchMap(async ({ item }) => {
        await this.loadingService.present('Equipping...');
        return { item};
      }),
      switchMap(({ item }) => {
        return this.userService.equipItem(item).pipe(
          map(( items: ItemInterface[]) => {
            return equipItemSuccessAction({ items })
          }),
          tap((state) => {
            // TODO: Update user of success, if necessary:
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(equipItemFailureAction({ error: errorResponse }))
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
