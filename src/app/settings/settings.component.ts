import {Component} from '@angular/core';
import {faBell, faChartBar, faCommentAlt, faLock, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  toggle2FA() {
    this.is2FAEnabled = !this.is2FAEnabled;
  }

  toggleIPConfirm() {
    this.isIPConfirmEnabled = !this.isIPConfirmEnabled;
  }

  toggleMultisignature() {
    this.isMultisignatureEnabled = !this.isMultisignatureEnabled;
  }
}
