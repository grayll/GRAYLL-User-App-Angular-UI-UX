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

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    CancelActiveOrdersPopupComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    FontAwesomeModule,
    NgbTabsetModule,
    RouterModule,
    PopupModule
  ],
  exports: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent
  ]
})
export class SharedModule { }
