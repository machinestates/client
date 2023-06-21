import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { PersistenceService } from "src/app/services/persistence.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signinAction, signinFailureAction, signinSuccessAction } from "../actions/signin.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { CurrentUserInterface } from "src/app/types/auth/current-user.interface";

@Injectable()
export class SigninEffect {

    signin$ = createEffect(() => this.actions$.pipe(
      ofType(signinAction),
      switchMap(({ request }) => {
        return this.authService.signin(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return signinSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(signinFailureAction({ error: errorResponse }));
          })
        )
      })
    ));

    redirectAfterSubmit$ = createEffect(
      () => this.actions$.pipe(
        ofType(signinSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/tabs/trade');
        })
      ),
      { dispatch: false }  
    );


    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private persistenceService: PersistenceService
    ) { }
}