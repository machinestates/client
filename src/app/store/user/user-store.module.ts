import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { GetItemsEffect } from './effects/get-items.effect';
import { EquipItemEffect } from './effects/equip-item.effect';
import { UnequipItemEffect } from './effects/unequip-item.effect';
import { GetCoinsEffect } from './effects/get-coins.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      GetItemsEffect,
      EquipItemEffect,
      UnequipItemEffect,
      GetCoinsEffect
    ]),
    StoreModule.forFeature('user', reducers)
  ]
})
export class UserStoreModule { }
