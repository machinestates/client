import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
