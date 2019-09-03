import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authorization/authorization.module#AuthorizationModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'system',
    loadChildren: './system/system.module#SystemModule'
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletModule'
  },
  {
    path: 'data',
    loadChildren: './data/data.module#DataModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: '',
    redirectTo: '/wallet/overview',
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
