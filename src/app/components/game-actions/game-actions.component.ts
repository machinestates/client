import { Component, Input, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/types/trade/game.interface';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {

  @Input() currentGame: GameInterface;

  constructor() { }

  ngOnInit() {}

  endRound() {}

  openTravelModal() {}

  openInventoryModal() {}

}
