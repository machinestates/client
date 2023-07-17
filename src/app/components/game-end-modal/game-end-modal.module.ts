import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameEndModalComponent } from './game-end-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameEndModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [GameEndModalComponent]
})
export class GameEndModalModule {

}
