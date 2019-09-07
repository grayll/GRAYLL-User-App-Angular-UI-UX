import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from "../../../shared/popup/popup.service";
import {SettingsService} from "../../settings.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-disable-wallet-app-notifications-settings',
  templateUrl: './disable-wallet-app-notifications-settings.component.html',
  styleUrls: ['./disable-wallet-app-notifications-settings.component.css']
})
export class DisableWalletAppNotificationsSettingsComponent implements OnInit {

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
      this.settingsService.sendWalletAppNotificationsDisabled();
      this.snotifyService.simple('App wallet notifications disabled.');
    });
  }

}
