import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';
import { AvatarNftsModule } from '../components/avatar-nfts/avatar-nfts.module';
import { AvatarCreateModule } from '../components/avatar-create/avatar-create.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    ImageCropperModule,
    AvatarNftsModule,
    AvatarCreateModule
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
