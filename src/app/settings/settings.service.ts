import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Security
  private twoFAEnabled: Subject<boolean>;
  private multisignatureEnabled: Subject<boolean>;
  private confirmAuthority: Subject<boolean>;

  // Notifications
  private walletEmailNotificationsDisabled: Subject<void>;
  private walletAppNotificationsDisabled: Subject<void>;
  private algoEmailNotificationsDisabled: Subject<void>;
  private algoAppNotificationsDisabled: Subject<void>;

  constructor() { }

  public observeConfirmAuthority(): Observable<boolean> {
    if (!this.confirmAuthority) {
      this.confirmAuthority = new Subject<boolean>();
    }
    return this.confirmAuthority.asObservable();
  }

  public sendConfirmAuthorityToObserver(confirm: boolean): void {
    if (!this.confirmAuthority) {
      this.confirmAuthority = new Subject<boolean>();
    }
    this.confirmAuthority.next(confirm);
  }

  public observeTwoFAEnabled(): Observable<boolean> {
    if (!this.twoFAEnabled) {
      this.twoFAEnabled = new Subject<boolean>();
    }
    return this.twoFAEnabled.asObservable();
  }

  public sendTwoFAEnabledToObserver(enable: boolean): void {
    if (!this.twoFAEnabled) {
      this.twoFAEnabled = new Subject<boolean>();
    }
    this.twoFAEnabled.next(enable);
  }

  public observeMultisignatureEnabled(): Observable<boolean> {
    if (!this.multisignatureEnabled) {
      this.multisignatureEnabled = new Subject<boolean>();
    }
    return this.multisignatureEnabled.asObservable();
  }

  public sendMultisignatureEnabledToObserver(enable: boolean): void {
    if (!this.multisignatureEnabled) {
      this.multisignatureEnabled = new Subject<boolean>();
    }
    this.multisignatureEnabled.next(enable);
  }

  public observeWalletEmailNotificationsDisabled(): Observable<void> {
    if (!this.walletEmailNotificationsDisabled) {
      this.walletEmailNotificationsDisabled = new Subject<void>();
    }
    return this.walletEmailNotificationsDisabled.asObservable();
  }

  public sendWalletEmailNotificationsDisabled(): void {
    if (!this.walletEmailNotificationsDisabled) {
      this.walletEmailNotificationsDisabled = new Subject<void>();
    }
    this.walletEmailNotificationsDisabled.next();
  }

  public observeWalletAppNotificationsDisabled(): Observable<void> {
    if (!this.walletAppNotificationsDisabled) {
      this.walletAppNotificationsDisabled = new Subject<void>();
    }
    return this.walletAppNotificationsDisabled.asObservable();
  }

  public sendWalletAppNotificationsDisabled(): void {
    if (!this.walletAppNotificationsDisabled) {
      this.walletAppNotificationsDisabled = new Subject<void>();
    }
    this.walletAppNotificationsDisabled.next();
  }

  public observeAlgoEmailNotificationsDisabled(): Observable<void> {
    if (!this.algoEmailNotificationsDisabled) {
      this.algoEmailNotificationsDisabled = new Subject<void>();
    }
    return this.algoEmailNotificationsDisabled.asObservable();
  }

  public sendAlgoEmailNotificationsDisabled(): void {
    if (!this.algoEmailNotificationsDisabled) {
      this.algoEmailNotificationsDisabled = new Subject<void>();
    }
    this.algoEmailNotificationsDisabled.next();
  }

  public observeAlgoAppNotificationsDisabled(): Observable<void> {
    if (!this.algoAppNotificationsDisabled) {
      this.algoAppNotificationsDisabled = new Subject<void>();
    }
    return this.algoAppNotificationsDisabled.asObservable();
  }

  public sendAlgoAppNotificationsDisabled(): void {
    if (!this.algoAppNotificationsDisabled) {
      this.algoAppNotificationsDisabled = new Subject<void>();
    }
    this.algoAppNotificationsDisabled.next();
  }

}
