import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-end-story',
  templateUrl: './game-end-story.component.html',
  styleUrls: ['./game-end-story.component.scss'],
})
export class GameEndStoryComponent  implements OnInit {

  @Input() story: string;
  @Input() storyAudio: string;

  audio: any;
  playing: boolean = false;

  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.storyAudio;
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
