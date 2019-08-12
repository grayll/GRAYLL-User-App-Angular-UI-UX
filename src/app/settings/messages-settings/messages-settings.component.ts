import {Component} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../settings.service';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-messages-settings',
  templateUrl: './messages-settings.component.html',
  styleUrls: ['./messages-settings.component.css']
})
export class MessagesSettingsComponent {

  // RxJS graceful unsubscribe
  private subscriptions = new SubSink();

  isGeneralEnabled = false;
  isWalletEnabled = true;
  isAlgoEnabled = false;

  constructor(
    private snotifyService: SnotifyService,
    private settingsService: SettingsService
  ) {
    this.observeWalletNotificationsDisabled();
    this.observeAlgoNotificationsDisabled();
  }

  private observeWalletNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeWalletMessagesDisabled()
    .subscribe(() => {
      this.isWalletEnabled = false;
    });
  }

  private observeAlgoNotificationsDisabled() {
    this.subscriptions.sink = this.settingsService.observeAlgoMessagesDisabled()
    .subscribe(() => {
      this.isAlgoEnabled = false;
    });
  }

  toggleGeneral() {
    this.isGeneralEnabled = !this.isGeneralEnabled;
    this.saveSettings();
  }

  enableWalletMessages() {
    this.isWalletEnabled = true;
    this.saveSettings();
  }

  enableAlgoMessages() {
    this.isAlgoEnabled = true;
    this.saveSettings();
  }

  private saveSettings() {
    this.displaySettingsSavedToast();
  }

  private displaySettingsSavedToast() {
    this.snotifyService.simple('Your settings are saved.');
  }

}
