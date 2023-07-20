import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScoresComponent } from './scores.component';
import { ScoreItemModule } from '../score-item/score-item.module';
import { FormsModule } from '@angular/forms';
import { ProfileModalModule } from '../profile-modal/profile-modal.module';

@NgModule({
  declarations: [ScoresComponent],
  imports: [
    CommonModule,
    IonicModule,
    ScoreItemModule,
    FormsModule,
    ProfileModalModule
  ],
  exports: [ScoresComponent]
})
export class ScoresModule { }
