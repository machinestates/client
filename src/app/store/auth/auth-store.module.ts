import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SignupEffect } from './effects/signup.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SignupEffect]),
    StoreModule.forFeature('auth', reducers)
  ]
})
export class AuthStoreModule { }
