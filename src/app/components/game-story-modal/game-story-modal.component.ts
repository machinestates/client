import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Typed from 'typed.js';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-game-story-modal',
  templateUrl: './game-story-modal.component.html',
  styleUrls: ['./game-story-modal.component.scss'],
})
export class GameStoryModalComponent  implements OnInit, AfterViewInit {
  @ViewChild('wrapper') private content;
  @Input() story: string;
  @Input() typeSpeed: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    new Typed(this.content.nativeElement.querySelector('.story'), {
      strings: [this.story],
      typeSpeed: this.typeSpeed
    });
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
