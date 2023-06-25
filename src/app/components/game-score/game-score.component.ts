import { Component, Input, OnInit } from "@angular/core";
import { GameInterface } from "src/app/types/trade/game.interface";


@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent implements OnInit {
  constructor() {}

  @Input() currentGame: GameInterface;

  ngOnInit(): void {
  }

  openExchangeModal(exchange) {
    console.log(exchange);
  }
}