import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap, tap } from "rxjs";

import { SolanaService } from "src/app/services/solana.service";
import { connectPhantomWalletAction, connectPhantomWalletFailureAction, connectPhantomWalletSuccessAction } from "../actions/connect-phantom-wallet.action";
import { AlertController, ToastController } from "@ionic/angular";
import { setPublicKeyAction } from "../../trade/actions/set-public-key.action";
import { Store } from "@ngrx/store";

@Injectable()
export class ConnectPhantomWalletEffect {

  connectPhantomWallet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(connectPhantomWalletAction),
      switchMap(() => {

        return from(this.solanaService.connectPhantomWallet()).pipe(
          map((publicKey: string) => {
            this.store.dispatch(setPublicKeyAction({publicKey}));
            return connectPhantomWalletSuccessAction({publicKey})
          }),

          catchError(() => {
            return of(connectPhantomWalletFailureAction())
          })
        )
      })
    )
  )

  connectPhantomWalletSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(connectPhantomWalletSuccessAction),
      tap(async (state) => {
        // Alert user of success:
        /**const alert = await this.alertController.create({
          header: 'Success',
          subHeader: 'Connected to Phantom Wallet',
          message: state.publicKey,
          buttons: ['OK'],
        });
    
        await alert.present();**/
      })
    ),
    { dispatch: false }
  )

  connectPhantomWalletFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(connectPhantomWalletFailureAction),
      tap(() => {
        // Alert user of failure:
      })
    ),
    { dispatch: false }
  )
  
  constructor(
    private actions$: Actions,
    private solanaService: SolanaService,
    private router: Router,
    private alertController: AlertController,
    private store: Store
  ) {}
}