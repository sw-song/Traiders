import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterClearPage } from './register-clear.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterClearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterClearPageRoutingModule {}
