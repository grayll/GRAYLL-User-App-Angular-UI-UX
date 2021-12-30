import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from '../../../models/user.model';
import {PopupService} from '../popup.service';
import {SettingsService} from '../../../settings/settings.service';
import {ErrorService} from '../../error/error.service';
import {UserService} from '../../../authorization/user.service';
import {SharedService} from '../../shared.service';
import {faCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-near-referral-resend-popup',
  templateUrl: './near-referral-resend-popup.component.html',
  styleUrls: ['./near-referral-resend-popup.component.scss']
})
export class NearReferralResendPopupComponent implements OnInit {

  @ViewChild('content') modal;
  currentNEARBalance: number;
  NEARLoanValue = 1.5;
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
    private sharedService: SharedService,
    private router: Router,
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

  goToEdit() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/referral/overview', {outlets: {popup: 'near-referral-edit'}}]);
      }, 200);
    });
  }

  retry() {
    this.error = false;
    this.success = false;
    this.didShowErrorOnce = true;
  }

}
