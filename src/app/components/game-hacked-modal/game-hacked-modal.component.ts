import { ViewChild, Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-game-hacked-modal',
  templateUrl: './game-hacked-modal.component.html',
  styleUrls: ['./game-hacked-modal.component.scss'],
})
export class GameHackedModalComponent implements OnInit, AfterViewInit {

  @Input() amount: number;
  image: string = 'assets/images/hacked-image0.jpg';
  @ViewChild('wrapper') private content;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.randomizeImage();
  }

  ngAfterViewInit() {
    this.initializeValues();
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  initializeValues() {
    const message = `HACKED! $${this.amount} has been taken! Avoid carrying fiatcoin to dangerous exchanges.`;
    new Typed(this.content.nativeElement.querySelector('.typing'), {
      strings: [message],
      typeSpeed: 50
    });
  }

  randomizeImage() {
    const images = [
      'assets/images/hacked-image0.jpg',
      'assets/images/hacked-image1.jpg',
      'assets/images/hacked-image2.jpg'
    ];
    this.image = images[Math.floor(Math.random() * images.length)];
  }

}
