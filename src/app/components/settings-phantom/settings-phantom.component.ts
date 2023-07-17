import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-phantom',
  templateUrl: './settings-phantom.component.html',
  styleUrls: ['./settings-phantom.component.scss'],
})
export class SettingsPhantomComponent  implements OnInit {

  address: string = '';

  constructor() { }

  ngOnInit() {
    this.connectPhantomWallet();
  }

  // TODO: Move to service:
  async connectPhantomWallet() {
    if ('phantom' in window) {
      const provider = (window as any).phantom?.solana;
      if (provider?.isPhantom) {
        const connected = await provider.connect();
        if (connected) {
          this.address = provider.publicKey.toString();
          console.log('Connected to Phantom Wallet: ', provider.publicKey.toString());

        }
      }
    }
    // window.open('https://phantom.app/ul/v1/connect?app_url=https://www.machinestates.com');
  }

}
