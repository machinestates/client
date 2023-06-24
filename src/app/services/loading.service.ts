import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) { }

  async present(message: string) {
    this.loading = await this.loadingController.create({
      message
    });
    await this.loading.present();
  }

  async dismiss() {
    console.log('Is this working?', this.loading);
    await this.loading.dismiss();
  }
}
