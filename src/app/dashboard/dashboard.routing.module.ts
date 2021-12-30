import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ActivateAccountPopupComponent} from '../shared/popup/activate-account/activate-account-popup.component';
import {XlmLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {XlmReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';
import {XlmBalanceStatusPopupComponent} from '../shared/popup/near-balance-status-popup/near-balance-status-popup.component';

const popupRoutes: Routes = [
  {
    path: 'activate-account',
    component: ActivateAccountPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-loan',
    component: XlmLoanPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-balance-status',
    component: XlmBalanceStatusPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xml-referral',
    component: XlmReferralPopupComponent,
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
