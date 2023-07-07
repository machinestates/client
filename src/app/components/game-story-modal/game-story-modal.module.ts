import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameStoryModalComponent } from './game-story-modal.component';

@NgModule({
  declarations: [GameStoryModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameStoryModalComponent]
})
export class GameStoryModalModule {

}
