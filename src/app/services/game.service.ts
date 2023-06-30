import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameResponseInterface } from '../types/trade/game-response.interface';
import { GameExchangeInterface } from '../types/trade/game-exchange.interface';
import { GameItemInterface } from '../types/trade/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  start() {
    const url = environment.apiUrl + '/trade';
    return this.http.post<GameResponseInterface>(url, {}).pipe(
      map(response => response.game)
    )
  }

  completeGame(uuid: string) {
    const body = {
      action: 'complete'
    };
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  borrow(uuid: string, amount: number) {
    const body = {
      action: 'borrow',
      amount
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  payDebt(uuid: string, amount: number) {
    const body = {
      action: 'pay',
      amount
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  travel(uuid: string, exchange: GameExchangeInterface) {
    const body = {
      action: 'travel',
      exchange: exchange.name
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  buyCoin(uuid: string, coin) {
    const body = {
      action: 'buy',
      coin: coin.name,
      quantity: coin.buyQuantity
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  sellCoin(uuid: string, coin) {
    const body = {
      action: 'sell',
      coin: coin.name,
      quantity: coin.sellQuantity
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }

  useItem(uuid: string, item: GameItemInterface) {
    const body = {
      action: 'useItem',
      name: item.name,
      uuid: item.uuid
    }
    const url = environment.apiUrl + '/trade/' + uuid;
    return this.http.put<GameResponseInterface>(url, body).pipe(
      map(response => response.game)
    )
  }
}
