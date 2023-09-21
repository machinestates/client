import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EarningsItemComponent } from './earnings-item.component';



@NgModule({
  declarations: [EarningsItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [EarningsItemComponent]
})
export class EarningsItemModule { }
