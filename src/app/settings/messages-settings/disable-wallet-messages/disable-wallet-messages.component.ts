import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {SettingsService} from '../../settings.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-disable-wallet-messages',
  templateUrl: './disable-wallet-messages.component.html',
  styleUrls: ['./disable-wallet-messages.component.css']
})
export class DisableWalletMessagesComponent implements OnInit {

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
      this.settingsService.sendWalletMessagesDisabled();
      this.snotifyService.simple('Wallet messages disabled.');
    });
  }

}
