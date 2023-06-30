import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { useItemAction } from 'src/app/store/trade/actions/use-item.action';
import { GameInventoryInterface } from 'src/app/types/trade/game-inventory.interface';
import { GameItemInterface } from 'src/app/types/trade/game-item.interface';

@Component({
  selector: 'app-game-inventory-modal',
  templateUrl: './game-inventory-modal.component.html',
  styleUrls: ['./game-inventory-modal.component.scss'],
})
export class GameInventoryModalComponent  implements OnInit {
  @Input() inventory: GameInventoryInterface;
  @Input() gameUuid: string;
  coinsTotal: number = 0;

  constructor(private modalController: ModalController, private store: Store) { }

  ngOnInit() {
    this.inventory.coins.forEach((coin) => {
      this.coinsTotal += coin.amount;
    });
  }


  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  useItem(item: GameItemInterface) {
    this.store.dispatch(useItemAction({ item, uuid: this.gameUuid }))
    this.close();
  }

}
