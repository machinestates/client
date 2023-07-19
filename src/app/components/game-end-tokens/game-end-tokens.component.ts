import { Component, Input, OnInit } from '@angular/core';
import { CoinInterface } from 'src/app/types/user/coin.interface';

@Component({
  selector: 'app-game-end-tokens',
  templateUrl: './game-end-tokens.component.html',
  styleUrls: ['./game-end-tokens.component.scss'],
})
export class GameEndTokensComponent  implements OnInit {
  @Input() coins: CoinInterface[];
  @Input() minted: boolean;

  constructor() { }

  ngOnInit() {}

}
