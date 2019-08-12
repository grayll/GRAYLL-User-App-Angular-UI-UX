import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {SettingsService} from '../../settings.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-disable-algo-messages',
  templateUrl: './disable-algo-messages.component.html',
  styleUrls: ['./disable-algo-messages.component.css']
})
export class DisableAlgoMessagesComponent implements OnInit {

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
      this.settingsService.sendAlgoMessagesDisabled();
      this.snotifyService.simple('Algo system messages disabled.');
    });
  }

}
