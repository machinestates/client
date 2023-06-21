import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signoutAction } from '../store/auth/actions/signout.action';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private store: Store) {}

  signout() {
    this.store.dispatch(signoutAction());
  }

}
