import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getItemsAction } from '../store/user/actions/get-items.action';
import { Observable } from 'rxjs';
import { ItemInterface } from '../types/user/item.interface';
import { coinsSelector, itemsSelector } from '../store/user/selectors';
import { equipItemAction } from '../store/user/actions/equip-item.action';
import { unequipItemAction } from '../store/user/actions/unequip-item.action';
import { inProgressSelector } from '../store/trade/selectors';
import { CoinInterface } from '../types/user/coin.interface';
import { getCoinsAction } from '../store/user/actions/get-coins.action';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss']
})
export class ItemsPage implements OnInit {

  inventoryType: string = 'items';
  items$: Observable<ItemInterface[]>;
  coins$: Observable<CoinInterface[]>;
  inProgress$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getItemsAction());
    this.store.dispatch(getCoinsAction());
    this.initializeValues();
  }

  initializeValues() {
    this.items$ = this.store.pipe(select(itemsSelector));
    this.coins$ = this.store.pipe(select(coinsSelector))
    this.inProgress$ = this.store.pipe(select(inProgressSelector));
  }

  equip(item: ItemInterface) {
    this.store.dispatch(equipItemAction({ item }));
  }

  unequip(item: ItemInterface) {
    this.store.dispatch(unequipItemAction({ item }));
  }

}
