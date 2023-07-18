import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Store, select } from '@ngrx/store';
import { startNewGameAction } from '../store/trade/actions/start-new-game.action';
import { gameSelector, inProgressSelector } from '../store/trade/selectors';
import { Observable } from 'rxjs';
import { GameInterface } from '../types/trade/game.interface';
import { SmartAudioService } from '../services/smart-audio.service';
import { publicKeySelector } from '../store/solana/selectors';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trade',
  templateUrl: 'trade.page.html',
  styleUrls: ['trade.page.scss']
})
export class TradePage implements OnInit {

  game$: Observable<GameInterface | null>;
  inProgress$: Observable<boolean>;
  completed$: Observable<boolean>;

  constructor(
    private store: Store, 
    private smartAudioService: SmartAudioService, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initializeValues();
  }

  async start() {
    // Check if there's a Solana public key:
    this.store.pipe(select(publicKeySelector)).subscribe(async (publicKey) => {
      if (publicKey) {
        this.store.dispatch(startNewGameAction({ publicKey }));
      } else {
        const alert = await this.alertController.create({
          header: 'No Wallet!',
          subHeader: 'Wallet Not Connected',
          message: 'Are you sure you want to play without a wallet? Connect a wallet to win tokens and NFTs.',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                
              },
            },
            {
              text: 'Yes, Play Without Wallet',
              role: 'confirm',
              handler: () => {
                this.store.dispatch(startNewGameAction({ publicKey }));
              },
            },
          ]
        });
    
        await alert.present();
      }
    });
  }

  initializeValues() {
    this.game$ = this.store.pipe(select(gameSelector));
    this.inProgress$ = this.store.pipe(select(inProgressSelector));

    this.smartAudioService.preload('start', 'assets/sounds/start.wav');
    this.smartAudioService.preload('hacked', 'assets/sounds/danger.wav');
    this.smartAudioService.preload('sell', 'assets/sounds/positive.wav');
    this.smartAudioService.preload('buy', 'assets/sounds/alert.wav');
    this.smartAudioService.preload('travel', 'assets/sounds/footsteps.mp3');
    this.smartAudioService.preload('borrow', 'assets/sounds/debt-alert.mp3');
    this.smartAudioService.preload('end', 'assets/sounds/end.wav');
  }

}
