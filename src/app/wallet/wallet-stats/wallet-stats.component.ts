import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faChartLine, faCircle, faWallet } from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { SettingsService } from '../../settings/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-stats',
  templateUrl: './wallet-stats.component.html',
  styleUrls: ['./wallet-stats.component.scss']
})
export class WalletStatsComponent implements OnInit, OnDestroy {

  @ViewChild(NgbCarousel) carouselWallet;

  faWallet = faWallet;
  faCircle = faCircle;
  faChartLine = faChartLine;
  federationAddress: string;
  stellarAddress: string;
  totalXLM: number;
  totalGRX: number;
  XLMValue: string;
  GRXValue: string;
  secretKey: string;
  isSecretKeyRevealed: boolean;
  buyGRX = {
    XLMValue: '',
    GRXValue: '',
  };

  sellGRX = {
    XLMValue: '',
    GRXValue: '',
  };

  private subscriptions = new SubSink();

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService,
    private router: Router
  ) {
    const buyGRX = JSON.parse(localStorage.getItem('buyGRX'));
    const sellGRX = JSON.parse(localStorage.getItem('sellGRX'));
    this.federationAddress = 'grayll3*grayll.io';
    this.stellarAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
    this.secretKey = 'GBMF3WYPDWQFOXVL2CO6NQPGQZJWLLKSGVTGGV7QPKCZCIQ3PZJGX4OG';
    this.totalXLM = 99999999999.99999;
    this.totalGRX = 99999999999.99999;
    this.XLMValue = null;
    this.GRXValue = null;
    this.buyGRX.XLMValue = buyGRX && buyGRX['XLMValue'] ? buyGRX['XLMValue'] : null;
    this.sellGRX.XLMValue = sellGRX && sellGRX['XLMValue'] ? sellGRX['XLMValue'] : null;
    this.buyGRX.GRXValue = buyGRX && buyGRX['GRXValue'] ? buyGRX['GRXValue'] : null;
    this.sellGRX.GRXValue = sellGRX && sellGRX['GRXValue'] ? sellGRX['GRXValue'] : null;

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

  copyStellarAddress() {
    if (this.clipboardService.copyFromContent(this.stellarAddress)) {
      this.snotifyService.simple('Stellar address copied.');
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

  populateMaxXLM(obj, prop) {
    this[obj][prop] = this.totalXLM.toString();
  }

  populateMaxGRX(obj, prop) {
    this[obj][prop] = this.totalGRX.toString();
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
    let localData = localStorage.getItem('buyGRX');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('buyGRX', JSON.stringify({ ...parsedLocalData, [property]: this.buyGRX[property] }));
    } else {
      localStorage.setItem('buyGRX', JSON.stringify({ [property]: this.buyGRX[property] }));
    }
  }

  onChangeSell(property) {
    let localData = localStorage.getItem('sellGRX');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('sellGRX', JSON.stringify({ ...parsedLocalData, [property]: this.sellGRX[property] }));
    } else {
      localStorage.setItem('sellGRX', JSON.stringify({ [property]: this.sellGRX[property] }));
    }
  }

}
