import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameAlertService {

  vibration = new Vibration();

  constructor(private alertService: AlertService) { }
  
  public async start(currentGame) {
    this.vibration.vibrate(3000);
    let messages = [
      'The TRADING SIMULATION has begun.',
      `Day ${currentGame.day}. You are at ${currentGame.exchange.name}.`
    ];
    messages = this.addAdditionalAlerts(messages, currentGame.exchange);
    this.alertService.success(messages, 55);
  }

  private addAdditionalAlerts(messages, exchange) {
    const coins = exchange.coins;
    _.each(coins, (coin) => {
      if (coin.isCheap) {
        messages.push(`${coin.name} is at a LOW price!`);
        setTimeout(() => {
          this.vibration.vibrate(3000);
        }, 4000);

      } else if (coin.isExpensive) {
        messages.push(`${coin.name} is at a HIGH price!`);
        setTimeout(() => {
          this.vibration.vibrate(3000);
        }, 4000);
      }
    });
    return messages;
  }
}
