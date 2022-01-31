import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenerPageRoutingModule } from './screener-routing.module';

import { ScreenerPage } from './screener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenerPageRoutingModule
  ],
  declarations: [ScreenerPage]
})
export class ScreenerPageModule {}
