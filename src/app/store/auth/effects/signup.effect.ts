import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { catchError, map, of, switchMap } from "rxjs";

import { PersistenceService } from "src/app/services/persistence.service";
import { AuthService } from "src/app/services/auth.service";

import { CurrentUserInterface } from "src/app/types/auth/current-user.interface";
import { signupAction, signupFailureAction, signupSuccessAction } from "../actions/signup.action";

@Injectable()
export class SignupEffect {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupAction),
      switchMap(({request}) => {
        return this.authService.signup(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return signupSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(signupFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(signupSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/tabs');
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
