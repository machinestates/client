import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { signoutAction } from '../store/auth/actions/signout.action';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  public sound: boolean;
  
  constructor(private store: Store, private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  signout() {
    this.store.dispatch(signoutAction());
  }

  initializeValues() {
    this.settingsService.getSound().subscribe((sound) => {
      this.sound = sound;
    });
  }

  toggleSound(event) {
    this.settingsService.setSound(event);
  }

}
