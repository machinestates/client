import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TradePage } from './trade.page';

import { TradePageRoutingModule } from './trade-routing.module';
import { ScoresModule } from '../components/scores/scores.module';
import { GameScoreModule } from '../components/game-score/game-score.module';
import { GameExchangeModule } from '../components/game-exchange/game-exchange.module';
import { AlertModule } from '../components/alert/alert.module';
import { GameActionsModule } from '../components/game-actions/game-actions.module';
import { GameDebtModule } from '../components/game-debt/game-debt.module';
import { GameStoryModalModule } from '../components/game-story-modal/game-story-modal.module';
import { GameEndModalModule } from '../components/game-end-modal/game-end-modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TradePageRoutingModule,
    ScoresModule,
    GameScoreModule,
    GameExchangeModule,
    AlertModule,
    GameActionsModule,
    GameDebtModule,
    GameStoryModalModule,
    GameEndModalModule
  ],
  declarations: [TradePage]
})
export class TradePageModule {}
