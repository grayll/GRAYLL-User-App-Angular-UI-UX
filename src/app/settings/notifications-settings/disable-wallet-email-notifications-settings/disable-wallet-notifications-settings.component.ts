import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {SettingsService} from '../../settings.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-disable-wallet-notifications-settings',
  templateUrl: './disable-wallet-notifications-settings.component.html',
  styleUrls: ['./disable-wallet-notifications-settings.component.css']
})
export class DisableWalletNotificationsSettingsComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private settingsService: SettingsService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  disable() {
    this.popupService.close().then(() => {
      this.settingsService.sendWalletEmailNotificationsDisabled();
      this.snotifyService.simple('E-mail wallet notifications disabled.');
    });
  }

}
