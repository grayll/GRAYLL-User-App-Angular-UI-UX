import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralComponent } from './referral.component';
import {NearReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';
import {NearLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {NearReferralRemovePopupComponent} from '../shared/popup/near-referral-remove-popup/near-referral-remove-popup.component';
import {NearReferrerRemovePopupComponent} from '../shared/popup/near-referrer-remove-popup/near-referrer-remove-popup.component';
import {NearReferralResendPopupComponent} from '../shared/popup/near-referral -resend-popup/near-referral-resend-popup.component';
import {NearReferralEditPopupComponent} from '../shared/popup/near-referral-edit-popup/near-referral-edit-popup.component';

const popupRoutes: Routes = [
  {
    path: 'xml-referral',
    component: NearReferralPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-loan',
    component: NearLoanPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-remove',
    component: NearReferralRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referrer-remove',
    component: NearReferrerRemovePopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-resend',
    component: NearReferralResendPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'near-referral-edit',
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
