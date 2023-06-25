import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { gameSelector } from "src/app/store/trade/selectors";
import { GameInterface } from "src/app/types/trade/game.interface";

import * as _ from 'lodash';
import { AlertService } from "src/app/services/alert.service";
import { sellCoinAction } from "src/app/store/trade/actions/sell-coin.action";
import { buyCoinAction } from "src/app/store/trade/actions/buy-coin.action";

@Component({
  selector: 'app-game-exchange',
  templateUrl: './game-exchange.component.html',
  styleUrls: ['./game-exchange.component.scss'],
})
export class GameExchangeComponent implements OnChanges, OnInit {

  actionPending: boolean = false;
  @Input() currentGame: GameInterface;
  coins: any[];

  constructor(private alertService: AlertService, private store: Store) {}

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.coins = _.cloneDeep(this.currentGame.exchange.coins);
  }

  openCoinModal(coin) {

  }

  alertBuyAmount(coin) {
    if (this.canBuy(coin.price, coin.buyQuantity) && coin.buyQuantity > 1) {
      const cost = (coin.price * coin.buyQuantity);
      this.alertService.success(
        [`Purchasing ${coin.buyQuantity} ${coin.name} will cost $${cost}.`],
        100
      );
    }
  }

  getMaxSellQuantity(coin): number {
    const result = _.find(this.currentGame.inventory.coins, { name: coin.name });
    return result ? result.amount : 0;
  }

  getMaxBuyQuantity(price): number {
    const fiatcoin = this.currentGame.inventory.fiatcoin;
    return Math.min(this.getRemainingCoinsCapacity(), Math.floor(fiatcoin / price));
  }

  getRemainingCoinsCapacity(): number {
    let available = this.currentGame.inventory.coinsCapacity;

    _.each(this.currentGame.inventory.coins, (coin) => {
      available -= coin.amount;
    });
    return available;
  }

  buy(coin) {
    const uuid = this.currentGame.uuid;
    this.store.dispatch(buyCoinAction({ uuid, coin }));
  }

  canBuy(price, quantity): boolean {
    const fiatcoin = _.get(this.currentGame, 'inventory.fiatcoin') || 0;
    return (this.getRemainingCoinsCapacity() >= quantity) && (fiatcoin >= (price * quantity));
  }

  sell(coin) {
    const uuid = this.currentGame.uuid;
    this.store.dispatch(sellCoinAction({ uuid, coin }));
  }

  canSell(name, quantity): boolean {
    const amount = this.getCoinInventoryAmount(name);
    return amount >= quantity;
  }

  public getCoinInventoryAmount(name: string): number {
    const result = _.find(this.currentGame.inventory.coins, { name });
    return result ? result.amount : 0;
  }
}