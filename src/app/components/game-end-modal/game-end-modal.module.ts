import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameEndModalComponent } from './game-end-modal.component';
import { FormsModule } from '@angular/forms';
import { GameEndTokensModule } from '../game-end-tokens/game-end-tokens.module';
import { GameEndStoryModule } from '../game-end-story/game-end-story.module';

@NgModule({
  declarations: [GameEndModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    GameEndTokensModule,
    GameEndStoryModule
  ],
  exports: [GameEndModalComponent]
})
export class GameEndModalModule {

}
