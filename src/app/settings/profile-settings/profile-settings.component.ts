import {Component} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {faCheck, faExclamation} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {

  federationAddress: string;
  stellarAddress: string;

  faCheck = faCheck;
  faExclamation = faExclamation;

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService
  ) {
    this.federationAddress = 'grayll3*grayll.io';
    this.stellarAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
  }

  copyFederationAddress() {
    if (this.clipboardService.copyFromContent(this.federationAddress)) {
      this.snotifyService.simple('Federation address copied.');
    }
  }

  copyStellarAddress() {
    if (this.clipboardService.copyFromContent(this.stellarAddress)) {
      this.snotifyService.simple('Stellar address copied.');
    }
  }

  save() {
    this.snotifyService.simple('Your changes are saved.');
  }

}
