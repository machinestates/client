import { Component, Input, OnInit } from "@angular/core";
import { NgxPopperjsPlacements } from "ngx-popperjs";
import { GameInfoService } from "src/app/services/game-info.service";
import { GameInterface } from "src/app/types/trade/game.interface";


@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent implements OnInit {
  constructor(private gameInfoService: GameInfoService) {}
  placement = NgxPopperjsPlacements.AUTOSTART;
  exchangePopperClass = 'exchange-popper';
  @Input() currentGame: GameInterface;

  ngOnInit(): void {
  }

  openExchangeModal(exchange) {
    console.log(exchange);
  }

  getExchangeDescription(exchange) {
    return this.gameInfoService.getExchange(exchange.name).shortDescription;
  }
}