import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error/error.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AccountActivityComponent} from './account-activity/account-activity.component';
import {RouterModule} from '@angular/router';
import {CancelActiveOrdersPopupComponent} from './account-activity/cancel-active-orders-popup/cancel-active-orders-popup.component';
import {PopupModule} from './popup/popup.module';
import {MainChartComponent} from '../dashboard/main-chart/main-chart.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ChartsModule} from 'ng2-charts';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    CancelActiveOrdersPopupComponent,
    MainChartComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    FontAwesomeModule,
    NgbTabsetModule,
    RouterModule,
    PopupModule,
    NgSelectModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    MainChartComponent
  ]
})
export class SharedModule { }
