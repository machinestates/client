import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameHackedModalComponent } from './game-hacked-modal.component';

@NgModule({
  declarations: [GameHackedModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameHackedModalComponent]
})
export class GameHackedModalModule {

}
