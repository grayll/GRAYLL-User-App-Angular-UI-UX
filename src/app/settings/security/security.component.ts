import {Component, OnDestroy} from '@angular/core';
import {SubSink} from 'subsink';
import {SnotifyService} from 'ng-snotify';
import {PopupService} from '../../shared/popup/popup.service';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnDestroy {

  // RxJS graceful unsubscribe
  private subscriptions = new SubSink();

  // Settings Attributes
  is2FAEnabled = true;
  isIPConfirmEnabled = false;
  isMultisignatureEnabled = true;

  constructor(
    private snotifyService: SnotifyService,
    private popupService: PopupService,
    private settingsService: SettingsService
  ) {
    this.observe2FAEnable();
    this.observeMultisignatureEnable();
  }

  private observe2FAEnable() {
    this.subscriptions.sink = this.settingsService.observeTwoFAEnabled()
    .subscribe((enable) => this.is2FAEnabled = enable);
  }

  private observeMultisignatureEnable() {
    this.subscriptions.sink = this.settingsService.observeMultisignatureEnabled()
    .subscribe((enable) => this.isMultisignatureEnabled = enable);
  }

  toggleIPConfirm() {
    this.isIPConfirmEnabled = !this.isIPConfirmEnabled;
    this.saveSettings();
  }

  private saveSettings() {
    this.displaySettingsSavedToast();
  }

  private displaySettingsSavedToast() {
    this.snotifyService.simple('Your settings are saved.');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
