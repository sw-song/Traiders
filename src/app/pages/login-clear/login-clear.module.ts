import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginClearPageRoutingModule } from './login-clear-routing.module';

import { LoginClearPage } from './login-clear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginClearPageRoutingModule
  ],
  declarations: [LoginClearPage]
})
export class LoginClearPageModule {}
