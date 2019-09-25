import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../popup.service';
import {Router} from '@angular/router';
import {UserService} from '../../../authorization/user.service';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {ErrorService} from '../../error/error.service';

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
  password: string;
  seed: string;
  firstPopup: boolean;
  hideCloseButton: boolean;
  displayFinalLayOffLoanPopup: boolean;
  canGoToDeposit: boolean;
  onCloseRedirectTo: string;

  constructor(
    private popupService: PopupService,
    private router: Router,
    private userService: UserService,
    private errorService: ErrorService,
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService
  ) {
    this.firstPopup = true;
    this.secretKey = 'GBMF3WYPDWQFOXVL2CO6NQPGQZJWLLKSGVTGGV7QPKCZCIQ3PZJGX4OG';
    this.seed = 'dark glow cats free joke drag zoo';
    this.onCloseRedirectTo = '/login';
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  activate() {
    if (this.clientValidation()) {
      this.errorService.clearError();
      if (this.didShowErrorOnce) {
        this.error = false;
        this.success = true;
        this.hideCloseButton = true;
        this.firstPopup = false;
        this.userService.activateAccount();
      } else {
        this.error = true;
      }
      this.didShowErrorOnce = true;
    }
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

  copySeed() {
    if (this.clipboardService.copyFromContent(this.seed)) {
      this.snotifyService.simple('Copied to clipboard.');
    }
  }

  displayLoan() {
    this.displayFinalLayOffLoanPopup = true;
    this.canGoToDeposit = true;
    this.error = false;
    this.success = false;
    this.hideCloseButton = false;
    this.onCloseRedirectTo = '/dashboard/overview';
  }

  goToDeposit() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/wallet/overview', {outlets: {popup: 'deposit'}}]);
      }, 200);
    });
  }

  clientValidation(): boolean {
    if (!this.password || (this.password && this.password === '')) {
      this.errorService.handleError(null, 'You must enter a password to activate your GRAYLL account.');
      return false;
    }
    return true;
  }
}
