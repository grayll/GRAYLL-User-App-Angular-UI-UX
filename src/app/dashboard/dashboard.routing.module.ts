import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DepositPopupComponent} from "../wallet/wallet-stats/deposit-popup/deposit-popup.component";
import {WithdrawPopupComponent} from "../wallet/wallet-stats/withdraw/withdraw-popup/withdraw-popup.component";

const popupRoutes: Routes = [
  {
    path: 'deposit',
    component: DepositPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'withdraw',
    component: WithdrawPopupComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: DashboardComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
