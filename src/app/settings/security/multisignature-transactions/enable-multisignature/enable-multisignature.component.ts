import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../../settings.service';

@Component({
  selector: 'app-enable-multisignature',
  templateUrl: './enable-multisignature.component.html',
  styleUrls: ['./enable-multisignature.component.css']
})
export class EnableMultisignatureComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  enable() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.snotifyService.simple('Multisignature transactions enabled.');
        this.settingsService.sendMultisignatureEnabledToObserver(true);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
