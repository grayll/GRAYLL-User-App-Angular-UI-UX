import {Component} from '@angular/core';
import {faBell, faChartBar, faCommentAlt, faLock, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';
import {SnotifyService} from 'ng-snotify';
import {PopupService} from '../shared/popup/popup.service';

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
    private snotifyService: SnotifyService,
    private popupService: PopupService
  ) { }

  disable2FA() {
    this.is2FAEnabled = false;
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
    this.snotifyService.simple('Your settings are saved.');
  }
}
