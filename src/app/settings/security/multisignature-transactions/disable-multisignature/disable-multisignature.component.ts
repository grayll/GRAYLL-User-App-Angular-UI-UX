import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../../settings.service';

@Component({
  selector: 'app-disable-multisignature',
  templateUrl: './disable-multisignature.component.html',
  styleUrls: ['./disable-multisignature.component.css']
})
export class DisableMultisignatureComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  disable() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.snotifyService.simple('Multisignature transactions disabled.');
        this.settingsService.sendMultisignatureEnabledToObserver(false);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
