import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../settings.service';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-enable-two-fa-last-step',
  templateUrl: './enable-two-fa-last-step.component.html',
  styleUrls: ['./enable-two-fa-last-step.component.css']
})
export class EnableTwoFaLastStepComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private router: Router,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  back() {
    this.sharedService.showModalOverview();
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile', {outlets: {popup: 'save-backup-key'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

  enable2FA() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.snotifyService.simple('Two-factor authentication enabled.');
        this.settingsService.sendTwoFAEnabledToObserver(true);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
