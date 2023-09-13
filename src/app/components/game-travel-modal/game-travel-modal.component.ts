import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { travelAction } from 'src/app/store/trade/actions/travel.action';
import { GameExchangeInterface } from 'src/app/types/trade/game-exchange.interface';

@Component({
  selector: 'app-game-travel-modal',
  templateUrl: './game-travel-modal.component.html',
  styleUrls: ['./game-travel-modal.component.scss'],
})
export class GameTravelModalComponent implements OnInit {

  constructor(private modalController: ModalController, private store: Store) { }

  @Input() exchanges: GameExchangeInterface[];
  @Input() currentExchange: string;
  @Input() gameUuid: string;

  ngOnInit() {
  }

  travelToExchange(exchange: GameExchangeInterface) {
    this.store.dispatch(travelAction({ exchange, uuid: this.gameUuid }));
    this.close();
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
