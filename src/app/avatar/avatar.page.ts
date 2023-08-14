import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { avatarSelector } from '../store/auth/selectors';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { uploadAvatarImageAction } from '../store/auth/actions/upload-avatar-image.action';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  avatar$: Observable<string>;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageToUpload: string = '';
  cropHidden: boolean = true;
  viewType = 'nfts';

  constructor(private store: Store) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.avatar$ = this.store.pipe(select(avatarSelector));
    this.store.pipe(select(avatarSelector)).subscribe((avatar) => {
      if (avatar) {
        this.imageToUpload = '';
        this.cropHidden = true;
      }
    });
  }

  cancel() {
    this.imageToUpload = '';
    this.cropHidden = true;
    (document as any).getElementById('file-input').value = null;
  }

  openFileDialog() {
    (document as any).getElementById('file-input').click();
  }

  fileChangeEvent(event: any): void {
    this.cropHidden = false;
    this.imageChangedEvent = event;
  }
  
  upload() {
    this.store.dispatch(uploadAvatarImageAction({ image: this.imageToUpload }));
  }
  
  imageCropped(event: ImageCroppedEvent) {
    this.imageToUpload = event.base64;
  }
    imageLoaded(image?: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

}
