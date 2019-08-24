import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {CommonModule} from '@angular/common';
import {WalletRoutingModule} from './wallet.routing.module';
import {SharedModule} from '../shared/shared.module';
import {WalletStatsComponent} from './wallet-stats/wallet-stats.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {DepositPopupComponent} from './wallet-stats/deposit-popup/deposit-popup.component';
import {PopupModule} from '../shared/popup/popup.module';

@NgModule({
  declarations: [
    WalletComponent,
    WalletStatsComponent,
    DepositPopupComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgbTabsetModule,
    PopupModule
  ]
})
export class WalletModule { }
