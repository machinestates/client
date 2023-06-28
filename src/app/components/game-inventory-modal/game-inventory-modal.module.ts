import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameInventoryModalComponent } from './game-inventory-modal.component';

@NgModule({
  declarations: [GameInventoryModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameInventoryModalComponent]
})
export class GameInventoryModalModule {}
