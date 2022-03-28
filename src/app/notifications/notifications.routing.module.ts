import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { NgModule } from '@angular/core';
import { NearLoanPopupComponent } from '../shared/popup/xpr-loan-popup/xpr-loan-popup.component';
import { NearReferralPopupComponent } from '../shared/popup/xpr-referral-popup/xpr-referral-popup.component';

const popupRoutes: Routes = [
  {
    path: 'xpr-loan',
    component: NearLoanPopupComponent,
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
    component: NotificationsComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
