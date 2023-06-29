import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import data from '../data/game.json';

@Injectable({
  providedIn: 'root'
})
export class GameInfoService {
  readonly coins: Array<any>;
  readonly exchanges: Array<any>;

  constructor() {
    this.coins = _.get(data, 'coins');
    this.exchanges = _.get(data, 'exchanges');
  }

  /**
   * Retrieves coin info by name
   */
  public getCoin(name: string): any {
    return _.find(this.coins, { name });
  }

  /**
   * Retrieves exchange info by name
   */
  public getExchange(name: string): any {
    return _.find(this.exchanges, { name });
  }
}
