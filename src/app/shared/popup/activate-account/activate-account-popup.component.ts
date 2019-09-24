import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../popup.service';
import {Router} from '@angular/router';
import {UserService} from '../../../authorization/user.service';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-pay-loan-popup',
  templateUrl: './activate-account-popup.html',
  styleUrls: ['./activate-account-popup.component.scss']
})
export class ActivateAccountPopupComponent implements OnInit {

  @ViewChild('content') modal;
  error: boolean;
  success: boolean;
  didShowErrorOnce: boolean;
  isSecretKeyRevealed: boolean;
  secretKey: string;

  constructor(
    private popupService: PopupService,
    private router: Router,
    private userService: UserService,
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService
  ) {
    this.secretKey = 'GBMF3WYPDWQFOXVL2CO6NQPGQZJWLLKSGVTGGV7QPKCZCIQ3PZJGX4OG';
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  activate() {
    if (this.didShowErrorOnce) {
      this.error = false;
      this.success = true;
      this.userService.activateAccount();
    } else {
      this.error = true;
    }
    this.didShowErrorOnce = true;
  }

  retry() {
    this.error = false;
    this.success = false;
    this.didShowErrorOnce = true;
  }

  copySecretKey() {
    if (this.clipboardService.copyFromContent(this.secretKey)) {
      this.snotifyService.simple('Copied to clipboard.');
    }
  }

  goToDeposit() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/wallet/overview', {outlets: {popup: 'deposit'}}]);
      }, 200);
    });
  }
}
