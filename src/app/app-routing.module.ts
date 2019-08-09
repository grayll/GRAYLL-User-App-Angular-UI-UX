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
import {GoogleAuthenticatorComponent} from './settings/two-FA-enable/google-authenticator/google-authenticator.component';
import {ScanQrCodeTwoFaComponent} from './settings/two-FA-enable/scan-qr-code-two-fa/scan-qr-code-two-fa.component';
import {SaveBackupKeyTwoFaComponent} from './settings/two-FA-enable/save-backup-key-two-fa/save-backup-key-two-fa.component';
import {EnableTwoFaLastStepComponent} from './settings/two-FA-enable/enable-two-fa-last-step/enable-two-fa-last-step.component';
import {DisableTwoFaComponent} from './settings/two-FA-enable/disable-two-fa/disable-two-fa.component';

const popupRoutes: Routes = [
  {
    path: 'google-authenticator',
    component: GoogleAuthenticatorComponent,
    outlet: 'popup'
  },
  {
    path: 'scan-qr-code',
    component: ScanQrCodeTwoFaComponent,
    outlet: 'popup'
  },
  {
    path: 'save-backup-key',
    component: SaveBackupKeyTwoFaComponent,
    outlet: 'popup'
  },
  {
    path: 'enable-two-fa',
    component: EnableTwoFaLastStepComponent,
    outlet: 'popup'
  },
  {
    path: 'disable-two-fa',
    component: DisableTwoFaComponent,
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
