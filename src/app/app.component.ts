import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './store/auth/actions/get-current-user.action';
import { connectPhantomWalletAction } from './store/solana/actions/connect-phantom-wallet.action';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
    this.store.dispatch(connectPhantomWalletAction());
  }
}
