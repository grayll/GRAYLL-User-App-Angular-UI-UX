import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './data.component';
import {NgModule} from '@angular/core';
import {NearLoanPopupComponent} from '../shared/popup/near-loan-popup/near-loan-popup.component';
import {NearReferralPopupComponent} from '../shared/popup/near-referral-popup/near-referral-popup.component';

const popupRoutes: Routes = [
  {
    path: 'near-loan',
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
export class DataRoutingModule {}
