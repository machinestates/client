import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameEndTokensComponent } from './game-end-tokens.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameEndTokensComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameEndTokensComponent]
})
export class GameEndTokensModule {

}
