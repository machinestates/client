import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { GetScoresEffect } from './effects/get-scores.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetScoresEffect]),
    StoreModule.forFeature('trade', reducers)
  ]
})
export class TradeStoreModule { }
