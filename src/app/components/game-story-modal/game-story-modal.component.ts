import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-game-story-modal',
  templateUrl: './game-story-modal.component.html',
  styleUrls: ['./game-story-modal.component.scss'],
})
export class GameStoryModalComponent implements OnInit {
  @ViewChild('wrapper') private content;
  @Input() story: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async share() {
    await Share.share({
      title: 'Game Story',
      text: this.story.replace(/<br\s*[\/]?>/gi, '\n')
    });
  }

}
