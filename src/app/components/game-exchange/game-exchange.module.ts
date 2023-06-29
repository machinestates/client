import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameExchangeComponent } from './game-exchange.component';
import { FormsModule } from '@angular/forms';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  declarations: [GameExchangeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    NgxPopperjsModule
  ],
  exports: [GameExchangeComponent]
})
export class GameExchangeModule { }
