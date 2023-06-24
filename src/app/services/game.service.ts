import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameResponseInterface } from '../types/trade/game-response.interface';

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

  sellCoin(uuid, coin) {
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
}
