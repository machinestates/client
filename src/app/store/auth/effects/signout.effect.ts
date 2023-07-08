import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signoutAction } from "../actions/signout.action";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";
import { PersistenceService } from "src/app/services/persistence.service";

@Injectable()
/**
 * @author Ease <ease@machinestates.com>
 */
export class SignoutEffect {

    constructor(private actions$: Actions, private router: Router, private persistenceService: PersistenceService) {}

    redirectOnSignout$ = createEffect(
      () => this.actions$.pipe(
        ofType(signoutAction),
        tap(() => {
          this.persistenceService.remove('accessToken');
          this.router.navigateByUrl('/signin');
          location.reload();
        })
      ),
      { dispatch: false }  
    );
}