import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SettingsPhantomComponent } from './settings-phantom.component';

@NgModule({
  declarations: [SettingsPhantomComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SettingsPhantomComponent]
})
export class SettingsPhantomModule { }
