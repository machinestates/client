import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Typed from 'typed.js';

@Component({
  selector: 'app-game-story-modal',
  templateUrl: './game-story-modal.component.html',
  styleUrls: ['./game-story-modal.component.scss'],
})
export class GameStoryModalComponent  implements OnInit, AfterViewInit {
  @ViewChild('wrapper') private content;
  @Input() story: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    new Typed(this.content.nativeElement.querySelector('.story'), {
      strings: [this.story],
      typeSpeed: 15
    });
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
