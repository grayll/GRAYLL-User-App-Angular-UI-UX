import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from './settings.routing.module';
import {SettingsComponent} from './settings.component';
import {GoogleAuthenticatorComponent} from './two-FA-enable/google-authenticator/google-authenticator.component';
import {ScanQrCodeTwoFaComponent} from './two-FA-enable/scan-qr-code-two-fa/scan-qr-code-two-fa.component';
import {SaveBackupKeyTwoFaComponent} from './two-FA-enable/save-backup-key-two-fa/save-backup-key-two-fa.component';
import {EnableTwoFaLastStepComponent} from './two-FA-enable/enable-two-fa-last-step/enable-two-fa-last-step.component';
import {DisableTwoFaComponent} from './two-FA-enable/disable-two-fa/disable-two-fa.component';
import {ClipboardModule} from 'ngx-clipboard';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupModule} from '../shared/popup/popup.module';

@NgModule({
  declarations: [
    SettingsComponent,
    GoogleAuthenticatorComponent,
    ScanQrCodeTwoFaComponent,
    SaveBackupKeyTwoFaComponent,
    EnableTwoFaLastStepComponent,
    DisableTwoFaComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SettingsRoutingModule,
    ClipboardModule,
    SharedModule,
    NgbModule,
    PopupModule
  ]
})
export class SettingsModule { }
