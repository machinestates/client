import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getItemsAction } from '../store/user/actions/get-items.action';
import { Observable } from 'rxjs';
import { ItemInterface } from '../types/user/item.interface';
import { itemsSelector } from '../store/user/selectors';
import { equipItemAction } from '../store/user/actions/equip-item.action';
import { unequipItemAction } from '../store/user/actions/unequip-item.action';
import { inProgressSelector } from '../store/trade/selectors';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss']
})
export class ItemsPage implements OnInit {

  items$: Observable<ItemInterface[]>;
  inProgress$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getItemsAction());
    this.initializeValues();
  }

  initializeValues() {
    this.items$ = this.store.pipe(select(itemsSelector));
    this.inProgress$ = this.store.pipe(select(inProgressSelector));
  }

  equip(item: ItemInterface) {
    console.log(item);
    this.store.dispatch(equipItemAction({ item }));
  }

  unequip(item: ItemInterface) {
    console.log(item);
    this.store.dispatch(unequipItemAction({ item }));
  }

}
