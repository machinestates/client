import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameExchangeComponent } from './game-exchange.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameExchangeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [GameExchangeComponent]
})
export class GameExchangeModule { }
