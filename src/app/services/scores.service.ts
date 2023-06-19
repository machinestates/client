import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetScoresResponseInterface } from '../types/trade/get-scores-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient) { }

  getScores() {
    const url = environment.apiUrl + '/trade/scores';
    return this.http.get<GetScoresResponseInterface>(url).pipe(
      map(response => response.scores)
    )
  }
}
