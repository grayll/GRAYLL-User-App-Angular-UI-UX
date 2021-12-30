import {RouterModule, Routes} from '@angular/router';
import {NotificationsComponent} from './notifications.component';
import {NgModule} from '@angular/core';
import {XlmLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {XlmReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';

const popupRoutes: Routes = [
  {
    path: 'near-loan',
    component: XlmLoanPopupComponent,
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
    component: NotificationsComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
