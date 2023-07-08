import { Component, Input, OnInit } from '@angular/core';
import { ScoreInterface } from 'src/app/types/trade/score.interface';


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent implements OnInit {

  @Input() score: ScoreInterface;
  audio: any;
  playing = false;

  constructor() {
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.score.storyAudio;
  }

  play() {
    this.audio.load();

    this.playing = true;
    this.audio.play();
  }

  stop() {
    this.playing = false;
    this.audio.pause();
  }
}
