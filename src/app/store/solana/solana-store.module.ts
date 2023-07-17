import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ConnectPhantomWalletEffect } from './effects/connect-phantom-wallet.effect';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      ConnectPhantomWalletEffect
    ]),
    StoreModule.forFeature('solana', reducers)
  ]
})
export class SolanaStoreModule { }
