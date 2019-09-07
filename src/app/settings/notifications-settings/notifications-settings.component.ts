import {Component, OnDestroy} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../settings.service';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-notifications-settings',
  templateUrl: './notifications-settings.component.html',
  styleUrls: ['./notifications-settings.component.css']
})
export class NotificationsSettingsComponent implements OnDestroy {

  // RxJS graceful unsubscribe
  private subscriptions = new SubSink();

  isGeneralEmailEnabled = false;
  isWalletEmailEnabled = true;
  isAlgoEmailEnabled = false;

  isGeneralAppEnabled = false;
  isWalletAppEnabled = true;
  isAlgoAppEnabled = false;

  constructor(
    private snotifyService: SnotifyService,
    private settingsService: SettingsService
  ) {
    this.observeWalletEmailNotificationsDisabled();
    this.observeWalletAppNotificationsDisabled();
    this.observeAlgoEmailNotificationsDisabled();
    this.observeAlgoAppNotificationsDisabled();
  }

  private observeWalletEmailNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeWalletEmailNotificationsDisabled()
      .subscribe(() => {
        this.isWalletEmailEnabled = false;
      });
  }

  private observeWalletAppNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeWalletAppNotificationsDisabled()
      .subscribe(() => {
        this.isWalletAppEnabled = false;
      });
  }

  private observeAlgoEmailNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeAlgoEmailNotificationsDisabled()
    .subscribe(() => {
      this.isAlgoEmailEnabled = false;
    });
  }

  private observeAlgoAppNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeAlgoAppNotificationsDisabled()
      .subscribe(() => {
        this.isAlgoAppEnabled = false;
      });
  }

  toggleGeneralEmail() {
    this.isGeneralEmailEnabled = !this.isGeneralEmailEnabled;
    this.saveSettings();
  }

  toggleGeneralApp() {
    this.isGeneralAppEnabled = !this.isGeneralAppEnabled;
    this.saveSettings();
  }

  enableWalletEmailNotifications() {
    this.isWalletEmailEnabled = true;
    this.saveSettings();
  }

  enableAlgoEmailNotifications() {
    this.isAlgoEmailEnabled = true;
    this.saveSettings();
  }

  enableWalletAppNotifications() {
    this.isWalletAppEnabled = true;
    this.saveSettings();
  }

  enableAlgoAppNotifications() {
    this.isAlgoAppEnabled = true;
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
