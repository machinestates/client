import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScoreItemComponent } from './score-item.component';



@NgModule({
  declarations: [ScoreItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ScoreItemComponent]
})
export class ScoreItemModule { }
