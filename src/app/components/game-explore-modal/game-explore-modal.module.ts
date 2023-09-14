import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameExploreModalComponent } from './game-explore-modal.component';

@NgModule({
  declarations: [GameExploreModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameExploreModalComponent],
})
export class GameExploreModalModule {

}
