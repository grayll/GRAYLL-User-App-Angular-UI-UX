import {Component, OnDestroy} from '@angular/core';
import {SubSink} from 'subsink';
import {SnotifyService} from 'ng-snotify';
import {PopupService} from '../../shared/popup/popup.service';
import {SettingsService} from '../settings.service';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../authorization/user.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnDestroy {

  // RxJS graceful unsubscribe
  private subscriptions = new SubSink();

  // Settings Attributes
  is2FAEnabled: boolean;
  isIPConfirmEnabled = false;
  isMultisignatureEnabled = true;

  private user: UserModel;

  constructor(
    private snotifyService: SnotifyService,
    private popupService: PopupService,
    private settingsService: SettingsService,
    private userService: UserService
  ) {
    this.observe2FAEnable();
    this.observeMultisignatureEnable();
    this.loadAttributes();
  }

  private loadAttributes() {
    this.user = this.userService.getUser();
    this.is2FAEnabled = this.user.is2FAEnabled;
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
