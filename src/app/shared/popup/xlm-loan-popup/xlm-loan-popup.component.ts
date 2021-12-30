import {Component, OnInit, ViewChild} from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {PopupService} from '../popup.service';
import {SettingsService} from '../../../settings/settings.service';
import {ErrorService} from '../../error/error.service';
import {UserService} from '../../../authorization/user.service';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-near-loan-popup',
  templateUrl: './near-loan-popup.component.html',
  styleUrls: ['./near-loan-popup.component.scss']
})
export class XlmLoanPopupComponent implements OnInit {

  @ViewChild('content') modal;
  currentNEARBalance: number;
  NEARLoanValue = 1.5;
  error: boolean;
  success: boolean;
  didShowErrorOnce: boolean;

  private user: UserModel;

  constructor(
    public popupService: PopupService,
    private settingsService: SettingsService,
    private errorService: ErrorService,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.user = this.userService.getUser();
    this.currentNEARBalance = this.user.NEARBalance;
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
