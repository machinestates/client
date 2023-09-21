import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EarningsInterface } from 'src/app/types/trade/earnings.interface';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-earnings-item',
  templateUrl: './earnings-item.component.html',
  styleUrls: ['./earnings-item.component.scss'],
})
export class EarningsItemComponent  implements OnInit {

  @Input() score: EarningsInterface;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      componentProps: {
        handle: this.score.handle,
        avatar: this.score.profileImage,
        score: this.score.totalEarnings
      }
    });
    await modal.present();
  }

}
