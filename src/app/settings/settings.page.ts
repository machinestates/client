import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signoutAction } from '../store/auth/actions/signout.action';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private store: Store) {}

  signout() {
    this.store.dispatch(signoutAction());
  }

}
