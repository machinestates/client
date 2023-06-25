import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GameDebtComponent } from './game-debt.component';

@NgModule({
  declarations: [GameDebtComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [GameDebtComponent]
})
export class GameDebtModule { }
