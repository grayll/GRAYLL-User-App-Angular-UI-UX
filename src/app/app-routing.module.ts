import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authorization/login/login.component';
import {NewPasswordComponent} from './authorization/new-password/new-password.component';
import {RegisterComponent} from './authorization/register/register.component';
import {TwoFactorComponent} from './authorization/two-factor/two-factor.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/two-factor',
    component: TwoFactorComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
