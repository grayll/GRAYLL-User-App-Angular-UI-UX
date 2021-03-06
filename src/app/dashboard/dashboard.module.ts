import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {ChartsModule} from 'ng2-charts';
import {InfoBoxesComponent} from './info-boxes/info-boxes.component';
import {WalletComponent} from './wallet/wallet.component';
import {TradeComponent} from './trade/trade.component';
import {SharedModule} from '../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderBoxesComponent} from './header-boxes/header-boxes.component';
import {PopupModule} from '../shared/popup/popup.module';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';

@NgModule({
  declarations: [
    DashboardComponent,
    InfoBoxesComponent,
    WalletComponent,
    TradeComponent,
    HeaderBoxesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgbTabsetModule,
    PopupModule,
    NgxFlagIconCssModule
  ]
})
export class DashboardModule { }
