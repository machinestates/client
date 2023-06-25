import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GameActionsComponent } from './game-actions.component';

@NgModule({
  declarations: [GameActionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [GameActionsComponent]
})
export class GameActionsModule { }
