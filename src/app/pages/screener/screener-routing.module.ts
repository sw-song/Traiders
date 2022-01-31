import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenerPage } from './screener.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenerPageRoutingModule {}
