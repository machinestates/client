import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoinInterface } from 'src/app/types/user/coin.interface';

@Component({
  selector: 'app-game-end-modal',
  templateUrl: './game-end-modal.component.html',
  styleUrls: ['./game-end-modal.component.scss'],
})
export class GameEndModalComponent  implements OnInit {

  @Input() story: string;
  @Input() coins: CoinInterface[];
  @Input() storyAudio: string;
  @Input() minted: boolean;

  viewType: string = 'tokens';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.coins);
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
