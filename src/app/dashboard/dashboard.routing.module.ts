import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ActivateAccountPopupComponent} from '../shared/popup/activate-account/activate-account-popup.component';
import {NearLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {NearReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';
import {NearBalanceStatusPopupComponent} from '../shared/popup/near-balance-status-popup/near-balance-status-popup.component';

const popupRoutes: Routes = [
  {
    path: 'activate-account',
    component: ActivateAccountPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-loan',
    component: NearLoanPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-balance-status',
    component: NearBalanceStatusPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xml-referral',
    component: NearReferralPopupComponent,
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
