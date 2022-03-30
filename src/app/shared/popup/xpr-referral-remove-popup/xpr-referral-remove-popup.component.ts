import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { PopupService } from '../popup.service';
import { SettingsService } from '../../../settings/settings.service';
import { ErrorService } from '../../error/error.service';
import { UserService } from '../../../authorization/user.service';
import { SharedService } from '../../shared.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-xpr-referral-popup',
  templateUrl: './xpr-referral-remove-popup.component.html',
  styleUrls: ['./xpr-referral-remove-popup.component.scss']
})
export class NearReferralRemovePopupComponent implements OnInit {

  @ViewChild('content') modal;
  currentXRPBalance: number;
  XRPLoanValue = 1.5;
  error: boolean;
  success: boolean;
  didShowErrorOnce: boolean;
  faPhone = faCircle;

  private user: UserModel;

  constructor(
    public popupService: PopupService,
    private settingsService: SettingsService,
    private errorService: ErrorService,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.user = this.userService.getUser();
    this.currentXRPBalance = this.user.Balance;
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  payOffLoan() {
    if (this.didShowErrorOnce) {
      this.error = false;
      this.success = true;
      this.sharedService.setIsLoanPaid(true);
      this.userService.loanPaid(true);
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

}
