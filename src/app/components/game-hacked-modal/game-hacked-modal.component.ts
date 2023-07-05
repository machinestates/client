import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-hacked-modal',
  templateUrl: './game-hacked-modal.component.html',
  styleUrls: ['./game-hacked-modal.component.scss'],
})
export class GameHackedModalComponent implements OnInit {

  @Input() amount: number;
  image: string = 'assets/images/hacked-image0.jpg';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.randomizeImage();
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
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
