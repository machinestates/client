import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AvatarNftsComponent } from './avatar-nfts.component';

@NgModule({
  declarations: [AvatarNftsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [AvatarNftsComponent]
})
export class AvatarNftsModule { }
