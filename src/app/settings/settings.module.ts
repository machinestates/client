import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPhantomModule } from '../components/settings-phantom/settings-phantom.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingsPageRoutingModule,
    SettingsPhantomModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
