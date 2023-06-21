import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SignupEffect } from './effects/signup.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SigninEffect } from './effects/signin.effect';
import { GetCurrentUserEffect } from './effects/get-current-user.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SignupEffect, SigninEffect, GetCurrentUserEffect]),
    StoreModule.forFeature('auth', reducers)
  ]
})
export class AuthStoreModule { }
