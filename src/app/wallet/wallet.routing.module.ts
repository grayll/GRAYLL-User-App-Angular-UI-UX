import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {DepositPopupComponent} from './wallet-stats/deposit-popup/deposit-popup.component';

const popupRoutes: Routes = [
  {
    path: 'deposit',
    component: DepositPopupComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: WalletComponent,
    children: [...popupRoutes]
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WalletRoutingModule { }
