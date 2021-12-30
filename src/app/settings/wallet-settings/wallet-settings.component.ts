import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../settings.service';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-wallet-settings',
  templateUrl: './wallet-settings.component.html',
  styleUrls: ['./wallet-settings.component.css']
})
export class WalletSettingsComponent implements OnInit, OnDestroy {

  federationAddress: string;
  nearAddress: string;
  secretKey: string;
  isSecretKeyRevealed: boolean;

  private subscriptions = new SubSink();

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private settingsService: SettingsService
  ) {
    this.federationAddress = 'grayll3*grayll.io';
    this.nearAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
    this.secretKey = 'GBMF3WYPDWQFOXVL2CO6NQPGQZJWLLKSGVTGGV7QPKCZCIQ3PZJGX4OG';
  }

  ngOnInit(): void {
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

  copyNEARAddress() {
    if (this.clipboardService.copyFromContent(this.nearAddress)) {
      this.snotifyService.simple('NEAR address copied.');
    }
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

}
