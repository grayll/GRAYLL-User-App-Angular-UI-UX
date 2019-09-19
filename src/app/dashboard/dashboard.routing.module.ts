import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {PayLoanPopupComponent} from '../shared/popup/pay-loan-popup/pay-loan-popup.component';

const popupRoutes: Routes = [
  {
    path: 'xlm-loan',
    component: PayLoanPopupComponent,
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
