import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Store, select } from '@ngrx/store';
import { startNewGameAction } from '../store/trade/actions/start-new-game.action';
import { gameSelector, inProgressSelector, tradeStateSelector } from '../store/trade/selectors';
import { Observable } from 'rxjs';
import { GameInterface } from '../types/trade/game.interface';
import { SmartAudioService } from '../services/smart-audio.service';
import { publicKeySelector } from '../store/solana/selectors';
import { AlertController } from '@ionic/angular';
import { AvatarInterface } from '../types/trade/avatar.interface';

@Component({
  selector: 'app-trade',
  templateUrl: 'trade.page.html',
  styleUrls: ['trade.page.scss']
})
export class TradePage implements OnInit {

  game$: Observable<GameInterface | null>;
  inProgress$: Observable<boolean>;
  completed$: Observable<boolean>;

  publicKey: string | null;
  avatar: AvatarInterface | null;

  constructor(
    private store: Store, 
    private smartAudioService: SmartAudioService, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initializeValues();
    this.store.pipe(select(tradeStateSelector)).subscribe((trade) => {
      this.publicKey = trade.publicKey;
      this.avatar = trade.avatar;
    });
  }

  async start() {
    // Check if there's a public key set:
    if (this.publicKey) {
      if (this.avatar.image) {
        this.store.dispatch(startNewGameAction({ publicKey: this.publicKey, name: this.avatar.name, image: this.avatar.image }));
      } else {
        const alert = await this.alertController.create({
          header: 'No Avatar!',
          subHeader: 'Avatar Not Set',
          message: 'Set your avatar to win tokens and NFTs.',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'No Wallet!',
        subHeader: 'Wallet Not Connected',
        message: 'Connect your Phantom wallet to win tokens and NFTs.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

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
