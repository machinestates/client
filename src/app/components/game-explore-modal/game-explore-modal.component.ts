import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-explore-modal',
  templateUrl: './game-explore-modal.component.html',
  styleUrls: ['./game-explore-modal.component.scss'],
})
export class GameExploreModalComponent  implements OnInit {
  @Input() found: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
