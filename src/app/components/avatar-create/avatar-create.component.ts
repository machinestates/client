import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { createUserNftAction } from 'src/app/store/solana/actions/create-user-nft.action';
import { getMintedNftAction } from 'src/app/store/solana/actions/get-minted-nft.action';
import { mintedNftSelector } from 'src/app/store/solana/selectors';
import { publicKeySelector } from 'src/app/store/trade/selectors';
import { MintedNftInterface } from 'src/app/types/solana/minted-nft.interface';

@Component({
  selector: 'app-avatar-create',
  templateUrl: './avatar-create.component.html',
  styleUrls: ['./avatar-create.component.scss'],
})
export class AvatarCreateComponent  implements OnInit {
  mintedNft$: Observable<MintedNftInterface>;
  wallet: string = '';

  imageToUpload: string = '';
  imageChangedEvent: any = '';
  cropHidden: boolean = true;

  constructor(private store: Store) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getMintedNftAction());
    this.mintedNft$ = this.store.pipe(select(mintedNftSelector));
    this.store.pipe(select(publicKeySelector)).subscribe((wallet) => {
      if (wallet) {
        this.wallet = wallet;
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
  
  create() {
    if (this.wallet) {
      this.store.dispatch(createUserNftAction({ wallet: this.wallet, image: this.imageToUpload}));
    }
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
