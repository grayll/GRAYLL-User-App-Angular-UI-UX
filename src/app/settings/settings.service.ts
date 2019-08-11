import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private twoFAEnabled: Subject<boolean>;
  private multisignatureEnabled: Subject<boolean>;

  constructor() { }

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

}
