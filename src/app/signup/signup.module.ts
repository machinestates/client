import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { ShowHidePasswordModule } from '../components/show-hide-password/show-hide-password.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ShowHidePasswordModule,
    ReactiveFormsModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
