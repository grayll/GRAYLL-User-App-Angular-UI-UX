import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {faEnvelope, faMobile, faWallet} from '@fortawesome/free-solid-svg-icons';
import {SharedService} from '../../../../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-withdraw-popup',
  templateUrl: './withdraw-popup.component.html',
  styleUrls: ['./withdraw-popup.component.css']
})
export class WithdrawPopupComponent implements OnInit {

  @ViewChild('content') modal;
  totalXLM: number;
  totalGRX: number;
  XLMValue: string;
  GRXValue: string;
  memoMessage: string;
  noMemoMessageSelected: boolean;
  showMemoWarning: boolean;

  // Font Awesome Icons
  faWallet = faWallet;
  faMobile = faMobile;
  faEnvelope = faEnvelope;

  constructor(
    public popupService: PopupService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.totalXLM = 99999999999.99999;
    this.totalGRX = 99999999999.99999;
    this.XLMValue = null;
    this.memoMessage = null;
    this.GRXValue = null;
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  populateMaxGRX() {
    this.GRXValue = this.totalGRX.toString();
  }

  populateMaxXLM() {
    this.XLMValue = this.totalXLM.toString();
  }

  next() {
    if (this.noMemoMessageSelected) {
      this.sharedService.showModalOverview();
      this.popupService.close()
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['/wallet/overview', {outlets: {popup: 'review-withdraw'}}]);
        }, 50);
      })
      .catch((error) => console.log(error));
    } else {
      this.showMemoWarning = true;
    }
  }
}
