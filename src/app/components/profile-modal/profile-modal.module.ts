import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileModalComponent } from './profile-modal.component';
import { ScoreItemComponent } from '../score-item/score-item.component';
import { ScoreItemModule } from '../score-item/score-item.module';

@NgModule({
  declarations: [ProfileModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ScoreItemModule
  ],
  exports: [ProfileModalComponent]
})
export class ProfileModalModule {}
