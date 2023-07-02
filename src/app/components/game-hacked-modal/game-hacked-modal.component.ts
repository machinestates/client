import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-hacked-modal',
  templateUrl: './game-hacked-modal.component.html',
  styleUrls: ['./game-hacked-modal.component.scss'],
})
export class GameHackedModalComponent implements OnInit {

  @Input() amount: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
