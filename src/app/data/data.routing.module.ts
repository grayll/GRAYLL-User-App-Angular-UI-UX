import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';
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
    component: DataComponent,
    children: [...popupRoutes]
  },
  {
    path: 'overview/system-activity/closed-algo-positions',
    component: DataComponent,
    data: {
      tab: 'system-activity'
    }
  },
  {
    path: 'overview/wallet-activity/all-orders/completed-orders',
    component: DataComponent,
    data: {
      tab: 'wallet-activity',
      subTab: 'allOrders'
    }
  },
  {
    path: 'overview/wallet-activity/transfers',
    component: DataComponent,
    data: {
      tab: 'wallet-activity',
      subTab: 'transfers'
    }
  },
  {
    path: 'overview/wallet-activity/networkHistory',
    component: DataComponent,
    data: {
      tab: 'wallet-activity',
      subTab: 'networkHistory'
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DataRoutingModule { }
