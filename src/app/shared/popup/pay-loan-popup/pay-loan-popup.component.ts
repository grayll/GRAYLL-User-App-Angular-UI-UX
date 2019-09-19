import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pay-loan-popup',
  templateUrl: './pay-loan-popup.component.html',
  styleUrls: ['./pay-loan-popup.component.scss']
})
export class PayLoanPopupComponent implements OnInit {

  @ViewChild('content') modal;
  error: boolean;
  success: boolean;
  didShowErrorOnce: boolean;

  constructor(
    private popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  activate() {
    if (this.didShowErrorOnce) {
      this.error = false;
      this.success = true;
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

  goToDeposit() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/wallet/overview', {outlets: {popup: 'deposit'}}]);
      }, 50);
    });
  }
}
