import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AvatarService } from "src/app/services/avatar.service";
import { LoadingService } from "src/app/services/loading.service";
import { createUserNftAction, createUserNftFailureAction, createUserNftSuccessAction } from "../actions/create-user-nft.action";
import { MintedNftInterface } from "src/app/types/solana/minted-nft.interface";
import { SolanaService } from "src/app/services/solana.service";
import { ToastController } from "@ionic/angular";

@Injectable()
export class CreateUserNftEffect {
  createUserNft$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserNftAction),
      switchMap(async ({ wallet, image }) => {
        await this.loadingService.present('Creating NFT...');
        return { wallet, image };
      }),
      switchMap(({wallet, image}) => {
        return this.solanaService.createUserNft(wallet, image).pipe(
          map((nft: { nft: MintedNftInterface }) => {
            return createUserNftSuccessAction(nft);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createUserNftFailureAction({ error: errorResponse }))
          }),
          tap(async () => await this.loadingService.dismiss())
        )
      })
    )
  );

  createUserNftFailure$ = createEffect(
    () => this.actions$.pipe(
      ofType(createUserNftFailureAction),
      tap(async (error) => {
        const toast = await this.toastController.create({
          message: error.error.message,
          duration: 5000,
          position: 'bottom',
          color: 'danger'
        });
    
        toast.present();
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private solanaService: SolanaService,
    private loadingService: LoadingService,
    private toastController: ToastController
  ) {}
}
