import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../../settings.service';
import {UserService} from '../../../../authorization/user.service';

@Component({
  selector: 'app-disable-two-fa',
  templateUrl: './disable-two-fa.component.html',
  styleUrls: ['./disable-two-fa.component.css']
})
export class DisableTwoFaComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  disable2FA() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.snotifyService.simple('Two-factor authentication disabled.');
        this.userService.enable2FA(false);
        this.settingsService.sendTwoFAEnabledToObserver(false);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
