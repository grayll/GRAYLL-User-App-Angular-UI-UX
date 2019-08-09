import {Component} from '@angular/core';
import {faBell, faChartBar, faCommentAlt, faLock, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';
import {SnotifyService, SnotifyToastConfig} from 'ng-snotify';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  // Font Awesome Icons
  faUser = faUser;
  faBell = faBell;
  faComment = faCommentAlt;
  faChartBar = faChartBar;
  faWallet = faWallet;
  faLock = faLock;

  // Settings Attributes
  is2FAEnabled = false;
  isIPConfirmEnabled = true;
  isMultisignatureEnabled = false;

  constructor(
    private snotifyService: SnotifyService
  ) { }

  toggle2FA() {
    this.is2FAEnabled = !this.is2FAEnabled;
    this.saveSettings();
  }

  toggleIPConfirm() {
    this.isIPConfirmEnabled = !this.isIPConfirmEnabled;
    this.saveSettings();
  }

  toggleMultisignature() {
    this.isMultisignatureEnabled = !this.isMultisignatureEnabled;
    this.saveSettings();
  }

  private saveSettings() {
    this.displaySettingsSavedToast();
  }

  private displaySettingsSavedToast() {
    console.log('Saved');
    this.snotifyService.simple('Your settings are saved.');
  }
}
