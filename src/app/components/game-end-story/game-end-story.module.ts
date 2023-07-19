import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameEndStoryComponent } from './game-end-story.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameEndStoryComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GameEndStoryComponent]
})
export class GameEndStoryModule {

}
