import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {SettingsService} from '../../settings.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-disable-algo-notifications-settings',
  templateUrl: './disable-algo-notifications-settings.component.html',
  styleUrls: ['./disable-algo-notifications-settings.component.css']
})
export class DisableAlgoNotificationsSettingsComponent implements OnInit {

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
      this.settingsService.sendAlgoEmailNotificationsDisabled();
      this.snotifyService.simple('E-mail Algo system notifications disabled.');
    });
  }

}
