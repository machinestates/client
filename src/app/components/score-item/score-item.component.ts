import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScoreInterface } from 'src/app/types/trade/score.interface';
import { GameStoryModalComponent } from '../game-story-modal/game-story-modal.component';


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent implements OnInit {

  @Input() score: ScoreInterface;
  audio: any;
  playing = false;

  constructor(private modalController: ModalController) {
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

  async read() {
    const modal = await this.modalController.create({
      component: GameStoryModalComponent,
      componentProps: {
        story: this.score.story.replace(/\n/g, "<br />"),
        typeSpeed: 0
      }
    });
    await modal.present();
  }
}
