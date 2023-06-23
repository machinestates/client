import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameScoreComponent } from './game-score.component.module';

@NgModule({
  declarations: [GameScoreComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameScoreComponent]
})
export class GameScoreModule { }
