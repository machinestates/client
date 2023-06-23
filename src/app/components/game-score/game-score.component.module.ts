import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { gameSelector } from "src/app/store/trade/selectors";
import { GameInterface } from "src/app/types/trade/game.interface";


@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent implements OnInit {
  constructor(private store: Store) {}

  game$: Observable<GameInterface | null>;

  ngOnInit(): void {
    this.intializeValues();
  }

  intializeValues() {
    this.game$ = this.store.pipe(select(gameSelector));  
  }

  openExchangeModal(exchange) {
    console.log(exchange);
  }
}