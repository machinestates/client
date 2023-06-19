import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TradePage } from './trade.page';

import { TradePageRoutingModule } from './trade-routing.module';
import { ScoreItemModule } from '../components/score-item/score-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TradePageRoutingModule,
    ScoreItemModule
  ],
  declarations: [TradePage]
})
export class TradePageModule {}
