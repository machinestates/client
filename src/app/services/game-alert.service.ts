import { Injectable } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import * as _ from 'lodash';

import { AlertService } from './alert.service';
import { SmartAudioService } from './smart-audio.service';

@Injectable({
  providedIn: 'root'
})
export class GameAlertService {

  vibration = new Vibration();

  constructor(private alertService: AlertService, private smartAudioService: SmartAudioService) { }

  public generateDanger(exchange) {
    return `Oh no...^3000 You have been HACKED...^2000 by an unknown assailant.` +
    `^2000 $${exchange.lossFromDanger} has been taken!`;

  }

  public async travel(currentGame): Promise<any> {
    const exchange = _.get(currentGame, 'exchange');
    const message = `Day ${currentGame.day || 1}. You are at ${currentGame.exchange.name}.`;
    const messages = this.addAdditionalAlerts([message], exchange);

    // Has danger:
    if (_.get(currentGame, 'exchange.hasDanger') && _.get(currentGame, 'exchange.lossFromDanger') > 0) {
      messages.unshift(this.generateDanger(exchange));
      
      this.vibration.vibrate(3000);
      this.smartAudioService.play('borrow');
      
      this.alertService.error(messages, 55);
    } else {
      this.alertService.success(messages, 55);
    }
  }
  
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
