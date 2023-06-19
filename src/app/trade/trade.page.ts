import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../services/scores.service';
import { Store, select } from '@ngrx/store';
import { getScoresAction } from '../store/trade/actions/get-scores.action';
import { ScoresInterface } from '../types/trade/scores.interface';
import { Observable } from 'rxjs';
import { scoresSelector } from '../store/trade/selectors';

@Component({
  selector: 'app-trade',
  templateUrl: 'trade.page.html',
  styleUrls: ['trade.page.scss']
})
export class TradePage implements OnInit {

  scores$: Observable<ScoresInterface>;

  scoresType: string = 'today';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getScoresAction());
    this.initializeValues();
  }

  initializeValues() {
    this.scores$ = this.store.pipe(select(scoresSelector));
  }

}
