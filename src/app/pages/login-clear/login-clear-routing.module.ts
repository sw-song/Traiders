import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginClearPage } from './login-clear.page';

const routes: Routes = [
  {
    path: '',
    component: LoginClearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginClearPageRoutingModule {}
