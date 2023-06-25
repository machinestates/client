import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameInterface } from 'src/app/types/trade/game.interface';
import { GameTravelModalComponent } from '../game-travel-modal/game-travel-modal.component';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {

  @Input() currentGame: GameInterface;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  endRound() {}

  async openTravelModal() {
    const modal = await this.modalController.create({
      component: GameTravelModalComponent,
      componentProps: {
        exchanges: this.currentGame.exchanges,
        currentExchange: this.currentGame.exchange.name,
        gameUuid: this.currentGame.uuid
      }
    });
    return await modal.present();
  }

  openInventoryModal() {}

}
