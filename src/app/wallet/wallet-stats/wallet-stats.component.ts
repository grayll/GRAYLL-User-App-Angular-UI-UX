import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faChartLine, faCircle, faWallet, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { SettingsService } from '../../settings/settings.service';
import { Router } from '@angular/router';
import { CustomModalService } from '../../shared/custom-modal.service';

@Component({
  selector: 'app-wallet-stats',
  templateUrl: './wallet-stats.component.html',
  styleUrls: ['./wallet-stats.component.scss']
})
export class WalletStatsComponent implements OnInit, OnDestroy {

  @ViewChild(NgbCarousel) carouselWallet;

  faWallet = faWallet;
  faCircle = faCircle;
  faInfo = faInfoCircle;
  faBell = faBell;
  faChartLine = faChartLine;
  federationAddress: string;
  nearAddress: string;
  totalXRP: number;
  totalGRQ: number;
  XRPValue: string;
  GRQValue: string;
  secretKey: string;
  isSecretKeyRevealed: boolean;
  buyGRQ = {
    XRPValue: '',
    GRQValue: '',
  };

  sellGRQ = {
    XRPValue: '',
    GRQValue: '',
  };

  private subscriptions = new SubSink();

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService,
    private router: Router,
    private customModalService: CustomModalService,
  ) {
    const buyGRQ = JSON.parse(localStorage.getItem('buyGRQ'));
    const sellGRQ = JSON.parse(localStorage.getItem('sellGRQ'));
    this.federationAddress = 'grayll3*grayll.io';
    this.nearAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
    this.secretKey = 'GBMF3WYPDWQFOXVL2CO6NQPGQZJWLLKSGVTGGV7QPKCZCIQ3PZJGX4OG';
    this.totalXRP = 99999999999.99999;
    this.totalGRQ = 99999999999.99999;
    this.XRPValue = null;
    this.GRQValue = null;
    this.buyGRQ.XRPValue = buyGRQ && buyGRQ['XRPValue'] ? buyGRQ['XRPValue'] : null;
    this.sellGRQ.XRPValue = sellGRQ && sellGRQ['XRPValue'] ? sellGRQ['XRPValue'] : null;
    this.buyGRQ.GRQValue = buyGRQ && buyGRQ['GRQValue'] ? buyGRQ['GRQValue'] : null;
    this.sellGRQ.GRQValue = sellGRQ && sellGRQ['GRQValue'] ? sellGRQ['GRQValue'] : null;

  }

  ngOnInit() {
    this.observeRevealSecretKey();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  copyFederationAddress() {
    if (this.clipboardService.copyFromContent(this.federationAddress)) {
      this.snotifyService.simple('Federation address copied.');
    }
  }

  copyXRPAddress() {
    if (this.clipboardService.copyFromContent(this.nearAddress)) {
      this.snotifyService.simple(' address copied.');
    }
  }

  revealSecretKey() {
    this.router.navigate(['/wallet/overview', { outlets: { popup: 'reveal-secret-key' } }]);
  }

  hideSecretKey() {
    this.isSecretKeyRevealed = false;
  }

  observeRevealSecretKey() {
    this.subscriptions.sink = this.settingsService.observeConfirmAuthority()
      .subscribe((confirm) => {
        // Not a secure solution. Please make a request to backend to get the code
        this.isSecretKeyRevealed = confirm;
      });
  }

  populateMaxXRP(obj, prop) {
    this[obj][prop] = this.totalXRP.toString();
  }

  populateMaxGRQ(obj, prop) {
    this[obj][prop] = this.totalGRQ.toString();
  }

  goToTop() {
    window.scroll(0, 0);
  }

  swipeLeft() {
    this.carouselWallet.next();
  }

  swipeRight() {
    this.carouselWallet.prev();
  }

  onChangeBuy(property) {
    let localData = localStorage.getItem('buyGRQ');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('buyGRQ', JSON.stringify({ ...parsedLocalData, [property]: this.buyGRQ[property] }));
    } else {
      localStorage.setItem('buyGRQ', JSON.stringify({ [property]: this.buyGRQ[property] }));
    }
  }

  onChangeSell(property) {
    let localData = localStorage.getItem('sellGRQ');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('sellGRQ', JSON.stringify({ ...parsedLocalData, [property]: this.sellGRQ[property] }));
    } else {
      localStorage.setItem('sellGRQ', JSON.stringify({ [property]: this.sellGRQ[property] }));
    }
  }

  openModal(id: string) {
    console.log("dfdfdf", id)
    this.customModalService.open(id);
  }
}
