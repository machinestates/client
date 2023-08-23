import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { avatarSelector } from '../store/auth/selectors';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { uploadAvatarImageAction } from '../store/auth/actions/upload-avatar-image.action';
import { MintedNftInterface } from '../types/solana/minted-nft.interface';
import { mintedNftSelector } from '../store/solana/selectors';
import { getMintedNftAction } from '../store/solana/actions/get-minted-nft.action';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  viewType = 'nfts';
  mintedNft$: Observable<MintedNftInterface>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getMintedNftAction());
    this.mintedNft$ = this.store.pipe(select(mintedNftSelector));
  }

}
