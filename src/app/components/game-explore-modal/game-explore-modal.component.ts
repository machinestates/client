import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Typed, { TypedOptions } from 'typed.js';


@Component({
  selector: 'app-game-explore-modal',
  templateUrl: './game-explore-modal.component.html',
  styleUrls: ['./game-explore-modal.component.scss'],
})
export class GameExploreModalComponent  implements OnInit, AfterViewInit {
  @Input() found: any;
  @ViewChild('wrapper') private content;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeValues();
  }

  initializeValues() {
    new Typed(this.content.nativeElement.querySelector('.typing'), {
      strings: [this.found.story],
      typeSpeed: 20
    });
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
