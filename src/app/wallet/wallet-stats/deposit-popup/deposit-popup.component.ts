import { Component, OnInit, ViewChild } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { PopupService } from '../../../shared/popup/popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-popup',
  templateUrl: './deposit-popup.component.html',
  styleUrls: ['./deposit-popup.component.css']
})
export class DepositPopupComponent implements OnInit {

  @ViewChild('content') modal;
  federationAddress: string;
  nearAddress: string;

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    public popupService: PopupService,
    private router: Router,
  ) {
    this.federationAddress = 'grayll3*grayll.io';
    this.nearAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  copyFederationAddress() {
    if (this.clipboardService.copyFromContent(this.federationAddress)) {
      this.snotifyService.simple('Federation address copied.');
    }
  }

  copyAddress() {
    if (this.clipboardService.copyFromContent(this.nearAddress)) {
      this.snotifyService.simple(' address copied.');
    }
  }
  //goto KYC 
  gotoKYC() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile', { outlets: { popup: 'kyc' } }]);
      }, 200);
    });
  }

}
