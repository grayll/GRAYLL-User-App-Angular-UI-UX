import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralComponent } from './referral.component';
import {XlmReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';
import {XlmLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {XlmReferralRemovePopupComponent} from '../shared/popup/near-referral-remove-popup/near-referral-remove-popup.component';
import {XlmReferrerRemovePopupComponent} from '../shared/popup/near-referrer-remove-popup/near-referrer-remove-popup.component';
import {XlmReferralResendPopupComponent} from '../shared/popup/near-referral -resend-popup/near-referral-resend-popup.component';
import {XlmReferralEditPopupComponent} from '../shared/popup/near-referral-edit-popup/near-referral-edit-popup.component';

const popupRoutes: Routes = [
  {
    path: 'xml-referral',
    component: XlmReferralPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-loan',
    component: XlmLoanPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-remove',
    component: XlmReferralRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referrer-remove',
    component: XlmReferrerRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-resend',
    component: XlmReferralResendPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-edit',
    component: XlmReferralEditPopupComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: ReferralComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralRoutingModule { }
