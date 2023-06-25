import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { GetScoresEffect } from './effects/get-scores.effect';
import { StartNewGameEffect } from './effects/start-new-game.effect';
import { SellCoinEffect } from './effects/sell-coin-effect';
import { BuyCoinEffect } from './effects/buy-coin.effect';
import { TravelEffect } from './effects/travel.effect';
import { PayDebtEffect } from './effects/pay-debt.effect';
import { BorrowEffect } from './effects/borrow.effect';
import { CompleteGameEffect } from './effects/complete-game.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      GetScoresEffect, 
      StartNewGameEffect, 
      SellCoinEffect, 
      BuyCoinEffect, 
      TravelEffect,
      PayDebtEffect,
      BorrowEffect,
      CompleteGameEffect
    ]),
    StoreModule.forFeature('trade', reducers)
  ]
})
export class TradeStoreModule { }
