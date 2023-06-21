import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { PersistenceService } from "src/app/services/persistence.service";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/get-current-user.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CurrentUserInterface } from "src/app/types/auth/current-user.interface";

@Injectable()
export class GetCurrentUserEffect {

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {

        const token = this.persistenceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )

  getCurrentUserFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(getCurrentUserFailureAction),
      tap(() => {
        this.router.navigateByUrl('/signin');
        this.persistenceService.remove('accessToken');
      })
    ),
    { dispatch: false }
  )
  
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistenceService: PersistenceService
  ) {}
}