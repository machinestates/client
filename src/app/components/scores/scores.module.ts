import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScoresComponent } from './scores.component';
import { ScoreItemModule } from '../score-item/score-item.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScoresComponent],
  imports: [
    CommonModule,
    IonicModule,
    ScoreItemModule,
    FormsModule
  ],
  exports: [ScoresComponent]
})
export class ScoresModule { }
