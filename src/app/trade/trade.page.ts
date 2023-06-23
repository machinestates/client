import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Store, select } from '@ngrx/store';
import { startNewGameAction } from '../store/trade/actions/start-new-game.action';
import { inProgressSelector } from '../store/trade/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trade',
  templateUrl: 'trade.page.html',
  styleUrls: ['trade.page.scss']
})
export class TradePage implements OnInit {

  inProgress$: Observable<boolean>;
  completed$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
  }

  start() {
    this.store.dispatch(startNewGameAction());
  }

  initializeValues() {
    this.inProgress$ = this.store.pipe(select(inProgressSelector));
  }

}
