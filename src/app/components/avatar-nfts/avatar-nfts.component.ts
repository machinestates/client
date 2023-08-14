import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getNftsAction } from 'src/app/store/solana/actions/get-nfts.action';
import { nftsSelector, publicKeySelector } from 'src/app/store/solana/selectors';
import { setAvatarAction } from 'src/app/store/trade/actions/set-avatar.action';
import { avatarImageSelector } from 'src/app/store/trade/selectors';
import { SolanaNftInterface } from 'src/app/types/solana/solana-nft.interface';

@Component({
  selector: 'app-avatar-nfts',
  templateUrl: './avatar-nfts.component.html',
  styleUrls: ['./avatar-nfts.component.scss'],
})
export class AvatarNftsComponent implements OnInit {
  nfts$: Observable<SolanaNftInterface[]>;
  avatarImage$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.nfts$ = this.store.pipe(select(nftsSelector));
    this.avatarImage$ = this.store.pipe(select(avatarImageSelector));

    this.store.pipe(select(publicKeySelector)).subscribe((wallet) => {
      if (wallet) {
        // Retrieve the NFTs for this wallet:
        this.store.dispatch(getNftsAction({ wallet }));
      }
    });
  }

  unsetAvatar() {
    this.store.dispatch(setAvatarAction({ avatar: {
      name: '',
      image: '',
    } }));
  }

  setAvatar(nft: any) {
    console.log('setAvatar', nft);
    this.store.dispatch(setAvatarAction({ avatar: nft }));
  }
}
