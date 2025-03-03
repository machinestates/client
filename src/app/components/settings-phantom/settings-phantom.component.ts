import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { connectPhantomWalletAction } from 'src/app/store/solana/actions/connect-phantom-wallet.action';
import { publicKeySelector } from 'src/app/store/solana/selectors';
import { inProgressSelector } from 'src/app/store/trade/selectors';

@Component({
  selector: 'app-settings-phantom',
  templateUrl: './settings-phantom.component.html',
  styleUrls: ['./settings-phantom.component.scss'],
})
export class SettingsPhantomComponent  implements OnInit {

  publicKey$: Observable<string | null>;
  inProgress$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.initializeValues();
  }

  // TODO: Move to service:
  async connectPhantomWallet() {
    this.store.dispatch(connectPhantomWalletAction());
  }

  initializeValues() {
    this.publicKey$ = this.store.pipe(select(publicKeySelector));
    this.inProgress$ = this.store.pipe(select(inProgressSelector));
  }

}
