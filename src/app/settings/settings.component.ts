import {Component, OnDestroy} from '@angular/core';
import {faBell, faChartBar, faCommentAlt, faLock, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';
import {SnotifyService} from 'ng-snotify';
import {PopupService} from '../shared/popup/popup.service';
import {SubSink} from 'subsink';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnDestroy {

  // RxJS graceful unsubscribe
  private subscriptions = new SubSink();

  // Font Awesome Icons
  faUser = faUser;
  faBell = faBell;
  faComment = faCommentAlt;
  faChartBar = faChartBar;
  faWallet = faWallet;
  faLock = faLock;

  // Settings Attributes
  is2FAEnabled = true;
  isIPConfirmEnabled = true;
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
