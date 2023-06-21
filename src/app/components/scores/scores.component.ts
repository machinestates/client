import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { getScoresAction } from "src/app/store/trade/actions/get-scores.action";
import { scoresSelector } from "src/app/store/trade/selectors";
import { ScoresInterface } from "src/app/types/trade/scores.interface";

@Component({
    selector: 'app-scores',
    templateUrl: './scores.component.html',
    styleUrls: ['./scores.component.scss']
})
/**
 * @author Erik Johnson <ease@machinestates.com>
 */
export class ScoresComponent implements OnInit {
  scores$: Observable<ScoresInterface>;
  scoresType: string = 'today';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getScoresAction());
    this.initializeValues();
  }

  initializeValues() {
    this.scores$ = this.store.pipe(select(scoresSelector));
  } 
}