import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralComponent } from './referral.component';
import { NearReferralPopupComponent } from '../shared/popup/xpr-referral-popup/xpr-referral-popup.component';
import { NearLoanPopupComponent } from '../shared/popup/xpr-loan-popup/xpr-loan-popup.component';
import { NearReferralRemovePopupComponent } from '../shared/popup/xpr-referral-remove-popup/xpr-referral-remove-popup.component';
import { NearReferrerRemovePopupComponent } from '../shared/popup/xpr-referrer-remove-popup/xpr-referrer-remove-popup.component';
import { NearReferralResendPopupComponent } from '../shared/popup/xpr-referral -resend-popup/xpr-referral-resend-popup.component';
import { NearReferralEditPopupComponent } from '../shared/popup/xpr-referral-edit-popup/xpr-referral-edit-popup.component';

const popupRoutes: Routes = [
  {
    path: 'xml-referral',
    component: NearReferralPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xpr-loan',
    component: NearLoanPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xpr-referral-remove',
    component: NearReferralRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xpr-referrer-remove',
    component: NearReferrerRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xpr-referral-resend',
    component: NearReferralResendPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'xpr-referral-edit',
    component: NearReferralEditPopupComponent,
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
