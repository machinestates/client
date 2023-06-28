import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameInventoryInterface } from 'src/app/types/trade/game-inventory.interface';

@Component({
  selector: 'app-game-inventory-modal',
  templateUrl: './game-inventory-modal.component.html',
  styleUrls: ['./game-inventory-modal.component.scss'],
})
export class GameInventoryModalComponent  implements OnInit {
  @Input() inventory: GameInventoryInterface;
  coinsTotal: number = 0;

  constructor(private modalController: ModalController) { }

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

  useItem(item) {}

}
