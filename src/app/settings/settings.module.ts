import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from './settings.routing.module';
import {SettingsComponent} from './settings.component';
import {GoogleAuthenticatorComponent} from './security/two-FA-enable/google-authenticator/google-authenticator.component';
import {ScanQrCodeTwoFaComponent} from './security/two-FA-enable/scan-qr-code-two-fa/scan-qr-code-two-fa.component';
import {SaveBackupKeyTwoFaComponent} from './security/two-FA-enable/save-backup-key-two-fa/save-backup-key-two-fa.component';
import {EnableTwoFaLastStepComponent} from './security/two-FA-enable/enable-two-fa-last-step/enable-two-fa-last-step.component';
import {DisableTwoFaComponent} from './security/two-FA-enable/disable-two-fa/disable-two-fa.component';
import {ClipboardModule} from 'ngx-clipboard';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupModule} from '../shared/popup/popup.module';
import {EnableMultisignatureComponent} from './security/multisignature-transactions/enable-multisignature/enable-multisignature.component';
import {DisableMultisignatureComponent} from './security/multisignature-transactions/disable-multisignature/disable-multisignature.component';
import {SecurityComponent} from './security/security.component';
import {WalletSettingsComponent} from './wallet-settings/wallet-settings.component';

@NgModule({
  declarations: [
    SettingsComponent,
    GoogleAuthenticatorComponent,
    ScanQrCodeTwoFaComponent,
    SaveBackupKeyTwoFaComponent,
    EnableTwoFaLastStepComponent,
    DisableTwoFaComponent,
    EnableMultisignatureComponent,
    DisableMultisignatureComponent,
    SecurityComponent,
    WalletSettingsComponent
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
