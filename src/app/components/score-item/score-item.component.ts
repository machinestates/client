import { Component, Input } from '@angular/core';
import { ScoreInterface } from 'src/app/types/trade/score.interface';


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent {

  @Input() score: ScoreInterface;

  constructor() {}
}
