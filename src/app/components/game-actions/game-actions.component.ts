import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameInterface } from 'src/app/types/trade/game.interface';
import { GameTravelModalComponent } from '../game-travel-modal/game-travel-modal.component';
import { Store } from '@ngrx/store';
import { travelAction } from 'src/app/store/trade/actions/travel.action';
import { completeGameAction } from 'src/app/store/trade/actions/complete-game.action';
import { GameInventoryModalComponent } from '../game-inventory-modal/game-inventory-modal.component';
import { exploreAction } from 'src/app/store/trade/actions/explore.action';
import { Observable } from 'rxjs';
import { exploredSelector } from 'src/app/store/trade/selectors';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    return false;
  }

  @Input() currentGame: GameInterface;

  constructor(private modalController: ModalController, private store: Store) { }


  ngOnInit() {}

  initializeValues() {
  }

  endRound() {
    this.store.dispatch(completeGameAction({ uuid: this.currentGame.uuid }));
  }

  async explore() {
    this.store.dispatch(exploreAction({ uuid: this.currentGame.uuid }));
  }

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

  async openInventoryModal() {
    const modal = await this.modalController.create({
      component: GameInventoryModalComponent,
      componentProps: {
        inventory: this.currentGame.inventory,
        gameUuid: this.currentGame.uuid
      }
    });
    return await modal.present();
  }

}
