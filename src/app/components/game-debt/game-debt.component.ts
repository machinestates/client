import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { borrowAction } from 'src/app/store/trade/actions/borrow.action';
import { payDebtAction } from 'src/app/store/trade/actions/pay-debt.action';
import { GameInterface } from 'src/app/types/trade/game.interface';


@Component({
  selector: 'app-game-debt',
  templateUrl: './game-debt.component.html',
  styleUrls: ['./game-debt.component.scss'],
})
export class GameDebtComponent implements OnInit {

  public payQuantity = 0;
  public borrowQuantity = 0;
  public actionPending = false;
  public activePay = false;
  public activeBorrow = false;

  @Input() currentGame: GameInterface;

  constructor(private store: Store) { }

  ngOnInit() {}

  public getDebt(): number {
    return _.get(this.currentGame, 'inventory.debt');
  }

  /**
   * Get maximum amount player is able to borrow
   */
  public getMaxBorrow(): number {
    const debt = _.get(this.currentGame, 'inventory.debt');
    const max = debt ? 20000 : 25000;
    return (max - debt);
  }

  /**
   * Get maximum amount player is able to payoff
   */
  public getMaxPayment(): number {
    const fiatcoin = _.get(this.currentGame, 'inventory.fiatcoin');
    const debt = _.get(this.currentGame, 'inventory.debt');
    return Math.min(fiatcoin, debt);
  }

  borrow() {
    const uuid = this.currentGame.uuid;
    this.store.dispatch(borrowAction({ uuid, amount: this.borrowQuantity }));
    this.borrowQuantity = 0;
    this.activeBorrow = false;
  }

  pay() {
    const uuid = this.currentGame.uuid;
    this.store.dispatch(payDebtAction({ uuid, amount: this.payQuantity }));
    this.payQuantity = 0;
    this.activePay = false;
  }

}
