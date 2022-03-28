import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../../shared/popup/popup.service';
import { faEnvelope, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../../../shared/shared.service';
import { Router } from '@angular/router';
import { ErrorService } from '../../../../shared/error/error.service';
import { WithdrawModel } from '../withdraw.model';

@Component({
  selector: 'app-withdraw-popup',
  templateUrl: './withdraw-popup.component.html',
  styleUrls: ['./withdraw-popup.component.css']
})
export class WithdrawPopupComponent implements OnInit {

  @ViewChild('content') modal;
  withdrawModel: WithdrawModel;
  total: number;
  totalGRQ: number;
  Value: string;
  GRQValue: string;
  memoMessage: string;
  recipient: string;
  selectedTabId: string;
  selectedCountryCode: string;
  phoneNumber: string;
  emailAddress: string;
  noMemoMessageSelected: boolean;
  isMemoMessageSelected: boolean;

  // Font Awesome Icons
  faWallet = faWallet;
  faMobile = faMobile;
  faEnvelope = faEnvelope;

  countryCodes = [
    'af', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz',
    'bj', 'bm', 'bt', 'bo', 'ba', 'bw', 'bv', 'br', 'io', 'bn', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'ky', 'cf', 'td', 'cl',
    'cn', 'cx', 'cc', 'co', 'km', 'cg', 'ck', 'cr', 'ci', 'ci', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq',
    'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'tf', 'ga', 'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu',
    'gt', 'gg', 'gn', 'gw', 'gy', 'ht', 'hm', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'iq', 'ie', 'im', 'il', 'it', 'jm', 'jp', 'je',
    'jo', 'kz', 'ke', 'ki', 'kr', 'kw', 'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'ly', 'li', 'lt', 'lu', 'mo', 'mg', 'mw', 'my', 'mv',
    'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'mm', 'na', 'nr', 'np', 'nl', 'an', 'nc',
    'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'mp', 'no', 'om', 'pk', 'pw', 'pa', 'pg', 'py', 'pe', 'ph', 'pn', 'pl', 'pt', 'pr', 'qa', 're',
    'ro', 'ru', 'ru', 'rw', 'kn', 'lc', 'pm', 'vc', 'vc', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb',
    'so', 'za', 'gs', 'es', 'lk', 'sd', 'sr', 'sj', 'sz', 'se', 'ch', 'sy', 'tw', 'tj', 'th', 'tl', 'tg', 'tk', 'to', 'tt', 'tt', 'tn',
    'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'gb', 'us', 'um', 'uy', 'uz', 'vu', 've', 'vn', 'vn', 'wf', 'eh', 'ye', 'zm', 'zw'
  ];

  constructor(
    public popupService: PopupService,
    private sharedService: SharedService,
    private router: Router,
    private errorService: ErrorService
  ) {
    const withdrawData = JSON.parse(localStorage.getItem('withdrawData'));
    this.total = 99999999999.99999;
    this.totalGRQ = 99999999999.99999;
    this.Value = withdrawData && withdrawData['Value'] ? withdrawData['Value'] : null;
    this.memoMessage = withdrawData && withdrawData['memoMessage'] ? withdrawData['memoMessage'] : null;
    this.GRQValue = withdrawData && withdrawData['GRQValue'] ? withdrawData['GRQValue'] : null;
    this.recipient = withdrawData && withdrawData['recipient'] ? withdrawData['recipient'] : null;
    this.emailAddress = withdrawData && withdrawData['emailAddress'] ? withdrawData['emailAddress'] : null;
    this.phoneNumber = withdrawData && withdrawData['phoneNumber'] ? withdrawData['phoneNumber'] : null;
    this.selectedCountryCode = withdrawData && withdrawData['selectedCountryCode'] ? withdrawData['selectedCountryCode'] : null;
    this.withdrawModel = new WithdrawModel();
    this.isMemoMessageSelected = true;

  }

  ngOnInit() {
    this.selectedCountryCode = 'af';
    this.popupService.open(this.modal);
    this.selectedTabId = 'wallet';
  }

  onTabChange(id: string) {
    this.selectedTabId = id;
  }

  populateMaxGRQ() {
    this.GRQValue = this.totalGRQ.toString();
    this.onChange(this.GRQValue);
  }

  populateMax() {
    this.Value = this.total.toString();
    this.onChange(this.Value);
  }

  next() {
    this.errorService.clearError();
    this.showOrHideUIElements();
    if (!this.clientValidation()) { return; }
    if ((this.memoMessage && this.selectedTabId === 'wallet') ||
      (this.noMemoMessageSelected) ||
      (this.selectedTabId !== 'wallet')) {
      this.sharedService.showModalOverview();
      // Populate Withdraw Model
      this.withdrawModel.address = this.recipient;
      this.withdrawModel.emailAddress = this.emailAddress;
      this.withdrawModel.grqAmount = +this.GRQValue;
      this.withdrawModel.memoMessage = this.memoMessage;
      this.withdrawModel.phoneNumber = this.phoneNumber;
      this.withdrawModel.nearAmount = +this.Value;
      this.popupService.close()
        .then(() => {
          setTimeout(() => {
            this.sharedService.setWithdrawModel(this.withdrawModel);
            this.router.navigate(['/wallet/overview', { outlets: { popup: 'review-withdraw' } }]);
          }, 50);
        })
        .catch((error) => console.log(error));
    }
  }

  private showOrHideUIElements() {
    this.isMemoMessageSelected = (this.memoMessage !== null) && (this.memoMessage !== '');
    if (this.noMemoMessageSelected) {
      this.memoMessage = null;
    }
  }

  clientValidation(): boolean {
    if (!this.recipient && this.selectedTabId === 'wallet') {
      this.errorService.handleError(null, 'Please enter a valid  Wallet or Federation Address.');
      return false;
    }
    if (this.selectedTabId === 'phone' && !this.phoneNumber || (this.phoneNumber && !this.isValidPhoneNumber(this.phoneNumber))) {
      this.errorService.handleError(null, 'Please enter a valid phone number.');
      return false;
    }
    if (this.selectedTabId === 'email' && !this.emailAddress) {
      this.errorService.handleError(null, 'Please enter an email address.');
      return false;
    }
    if ((!this.GRQValue && !this.Value) || (this.GRQValue && !this.isValidNumber(this.GRQValue))) {
      this.errorService.handleError(null, 'Please enter a valid amount.');
      return false;
    }
    if (this.selectedTabId !== 'wallet' && !this.memoMessage) {
      this.errorService.handleError(null, 'Please enter a memo message.');
      return false;
    }
    if ((!this.Value && !this.GRQValue) || (this.Value && !this.isValidNumber(this.Value))) {
      this.errorService.handleError(null, 'Please enter a valid amount.');
      return false;
    }
    if (this.Value && this.GRQValue) {
      this.errorService.handleError(null, 'Please enter only GRQ or only  value.');
      return false;
    }
    return true;
  }

  isValidNumber(value: string): boolean {
    const num = Number(value);
    return !isNaN(num);
  }

  isValidPhoneNumber(value: string): boolean {
    return this.isValidNumber(value.replace('+', ''));
  }

  onChange(property) {
    let localData = localStorage.getItem('withdrawData');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('withdrawData', JSON.stringify({ ...parsedLocalData, [property]: this[property] }));
    } else {
      localStorage.setItem('withdrawData', JSON.stringify({ [property]: this[property] }));
    }
  }
}
