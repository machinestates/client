import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-story-modal',
  templateUrl: './game-story-modal.component.html',
  styleUrls: ['./game-story-modal.component.scss'],
})
export class GameStoryModalComponent implements OnInit {
  @ViewChild('wrapper') private content;
  @Input() story: string;
  @Input() uuid: string;

  constructor(private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async share() {
    navigator.clipboard.writeText(environment.shareUrl + '/' + this.uuid);
    const toast = await this.toastController.create({
      message: 'URL copied to clipboard',
      duration: 3000,
      position: 'bottom',
    });

    await toast.present();
  }

}
