import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error/error.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {NgbCollapseModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AccountActivityComponent} from './account-activity/account-activity.component';
import {RouterModule} from '@angular/router';
import {CancelActiveOrdersPopupComponent} from './account-activity/cancel-active-orders-popup/cancel-active-orders-popup.component';
import {PopupModule} from './popup/popup.module';
import {MainChartComponent} from '../dashboard/main-chart/main-chart.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivityComponent} from './system-activity/activity.component';
import {CountdownModule} from 'ngx-countdown';
import {AlgoNotificationItemComponent} from './algo-notification-item/algo-notification-item.component';
import {CustomModalComponent} from './custom-modal.component';
import { WalletNotificationItemComponent } from './wallet-notification-item/wallet-notification-item.component';
import { GeneralNotificationItemComponent } from './general-notification-item/general-notification-item.component';
import {RevealSecretKeyPopupComponent} from './popup/reveal-secret-key-popup/reveal-secret-key-popup.component';
import {ActivateAccountPopupComponent} from './popup/activate-account/activate-account-popup.component';
import {NearLoanPopupComponent} from './popup/near-loan-popup/near-loan-popup.component';
import {NearReferralPopupComponent} from './popup/near-referral-popup/near-referral-popup.component';
import {NearReferralRemovePopupComponent} from './popup/near-referral-remove-popup/near-referral-remove-popup.component';
import {NearReferrerRemovePopupComponent} from './popup/near-referrer-remove-popup/near-referrer-remove-popup.component';
import {NearReferralResendPopupComponent} from './popup/near-referral -resend-popup/near-referral-resend-popup.component';
import {NearReferralEditPopupComponent} from './popup/near-referral-edit-popup/near-referral-edit-popup.component';
import {NearBalanceStatusPopupComponent} from './popup/near-balance-status-popup/near-balance-status-popup.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { LoaderScreenComponent } from './loader-screen/loader-screen.component';
import { SwUpdateNotifiyComponent } from './sw-update-notifiy/sw-update-notifiy.component';
import { ReferralActivityComponent } from './referral-activity/referral-activity.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    CancelActiveOrdersPopupComponent,
    MainChartComponent,
    ActivityComponent,
    AlgoNotificationItemComponent,
    CustomModalComponent,
    WalletNotificationItemComponent,
    GeneralNotificationItemComponent,
    RevealSecretKeyPopupComponent,
    ActivateAccountPopupComponent,
    NearLoanPopupComponent,
    NearReferralPopupComponent,
    NearBalanceStatusPopupComponent,
    LoaderScreenComponent,
    LoaderScreenComponent,
    SwUpdateNotifiyComponent,
    ReferralActivityComponent,
    NearReferralRemovePopupComponent,
    NearReferrerRemovePopupComponent,
    NearReferralResendPopupComponent,
    NearReferralEditPopupComponent,
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
    FormsModule,
    CountdownModule,
    NgbTooltipModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorComponent,
    NavbarComponent,
    AccountActivityComponent,
    MainChartComponent,
    ActivityComponent,
    AlgoNotificationItemComponent,
    CustomModalComponent,
    WalletNotificationItemComponent,
    GeneralNotificationItemComponent,
    LoaderScreenComponent,
    SwUpdateNotifiyComponent,
    ReferralActivityComponent,
  ]
})
export class SharedModule { }
