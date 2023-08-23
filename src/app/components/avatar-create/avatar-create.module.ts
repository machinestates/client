import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AvatarCreateComponent } from './avatar-create.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [AvatarCreateComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ImageCropperModule,
    MomentModule
  ],
  exports: [AvatarCreateComponent]
})
export class AvatarCreateModule { }
