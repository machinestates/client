import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GameActionsComponent } from './game-actions.component';
import { GameTravelModalModule } from '../game-travel-modal/game-travel-modal.module';
import { GameInventoryModalModule } from '../game-inventory-modal/game-inventory-modal.module';

@NgModule({
  declarations: [GameActionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GameTravelModalModule,
    GameInventoryModalModule
  ],
  exports: [GameActionsComponent]
})
export class GameActionsModule { }
