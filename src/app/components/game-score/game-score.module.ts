import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameScoreComponent } from './game-score.component';

import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  declarations: [GameScoreComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxPopperjsModule
  ],
  exports: [GameScoreComponent]
})
export class GameScoreModule { }
