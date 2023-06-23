import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { gameSelector } from "src/app/store/trade/selectors";
import { GameInterface } from "src/app/types/trade/game.interface";

@Component({
  selector: 'app-game-exchange',
  templateUrl: './game-exchange.component.html',
  styleUrls: ['./game-exchange.component.scss'],
})
export class GameExchangeComponent {

  actionPending: boolean = false;
  game$: Observable<GameInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.game$ = this.store.pipe(select(gameSelector));  
  }

  openCoinModal(coin) {

  }

  alertBuyAmount(coin) {}

  getMaxBuyQuantity(price) {
    return 2;
  }

  buy(coin) {}

  canBuy(coin, quantity) {
    return true;
  }

  getMaxSellQuantity(price) {
    return 1;
  }

  sell(coin) {}

  canSell(coin, quantity) {
    return true;
  }




}