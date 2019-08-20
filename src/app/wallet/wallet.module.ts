import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {CommonModule} from '@angular/common';
import {WalletRoutingModule} from './wallet.routing.module';
import {SharedModule} from '../shared/shared.module';
import {WalletStatsComponent} from './wallet-stats/wallet-stats.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WalletComponent,
    WalletStatsComponent,
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgbTabsetModule
  ]
})
export class WalletModule { }
