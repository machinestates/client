import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signoutAction } from "../actions/signout.action";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
/**
 * @author Ease <ease@machinestates.com>
 */
export class SignoutEffect {

    constructor(private actions$: Actions, private router: Router) {}

    redirectOnSignout$ = createEffect(
      () => this.actions$.pipe(
        ofType(signoutAction),
        tap(() => {
          this.router.navigateByUrl('/signin');
        })
      ),
      { dispatch: false }  
    );
}