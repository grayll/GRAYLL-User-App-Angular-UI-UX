import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authorization/login/login.component';
import {NewPasswordComponent} from './authorization/new-password/new-password.component';
import {RegisterComponent} from './authorization/register/register.component';
import {TwoFactorComponent} from './authorization/two-factor/two-factor.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {SettingsComponent} from './settings/settings.component';
import {TwoFactorEnableComponent} from './settings/two-factor-enable/two-factor-enable.component';

const popupRoutes: Routes = [
  {
    path: 'two-factor-step-one',
    component: TwoFactorEnableComponent,
    outlet: 'popup'
  }
];

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
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      ...popupRoutes
    ]
  },
  {
    path: '',
    redirectTo: '/settings',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
