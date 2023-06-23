import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewGameResponseInterface } from '../types/trade/new-game-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  start() {
    const url = environment.apiUrl + '/trade';
    return this.http.post<NewGameResponseInterface>(url, {}).pipe(
      map(response => response.game)
    )
  }
}
