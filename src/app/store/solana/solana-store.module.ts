import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ConnectPhantomWalletEffect } from './effects/connect-phantom-wallet.effect';
import { GetNftsEffect } from './effects/get-nfts.effect';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      ConnectPhantomWalletEffect,
      GetNftsEffect
    ]),
    StoreModule.forFeature('solana', reducers)
  ]
})
export class SolanaStoreModule { }
