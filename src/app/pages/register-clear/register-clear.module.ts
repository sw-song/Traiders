import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterClearPageRoutingModule } from './register-clear-routing.module';

import { RegisterClearPage } from './register-clear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterClearPageRoutingModule
  ],
  declarations: [RegisterClearPage]
})
export class RegisterClearPageModule {}
