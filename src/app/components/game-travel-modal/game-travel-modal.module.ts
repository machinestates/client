import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameTravelModalComponent } from './game-travel-modal.component';

@NgModule({
  declarations: [GameTravelModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameTravelModalComponent]
})
export class GameTravelModalModule {}
