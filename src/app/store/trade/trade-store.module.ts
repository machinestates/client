import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { GetScoresEffect } from './effects/get-scores.effect';
import { StartNewGameEffect } from './effects/start-new-game.effect';
import { SellCoinEffect } from './effects/sell-coin-effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetScoresEffect, StartNewGameEffect, SellCoinEffect]),
    StoreModule.forFeature('trade', reducers)
  ]
})
export class TradeStoreModule { }
