import { Component, Input, OnInit } from "@angular/core";
import { NgxPopperjsPlacements } from "ngx-popperjs";
import { GameInfoService } from "src/app/services/game-info.service";
import { AvatarInterface } from "src/app/types/trade/avatar.interface";
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
  @Input() avatar: AvatarInterface;

  ngOnInit(): void {
  }

  openExchangeModal(exchange) {
    console.log(exchange);
  }

  getExchangeDescription(exchange) {
    return this.gameInfoService.getExchange(exchange.name).shortDescription;
  }
}