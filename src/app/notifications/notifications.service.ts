import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private numberOfUnreadAlgoNotifications: number;
  private numberOfUnreadWalletNotifications: number;
  private numberOfUnreadSystemNotifications: number;
  private numberOfAllUnreadNotifications: number;

  constructor() {
    this.resetNumberOfAllUnreadNotifications();
  }

  getNumberOfAllUnreadNotifications() {
    return this.numberOfAllUnreadNotifications;
  }

  increaseNumberOfAllUnreadNotificationsBy(count: number) {
    this.numberOfAllUnreadNotifications += count;
  }

  decreaseNumberOfAllUnreadNotifications() {
    if (this.numberOfAllUnreadNotifications > 0) {
      this.numberOfAllUnreadNotifications--;
    }
  }

  resetNumberOfAllUnreadNotifications() {
    this.numberOfAllUnreadNotifications = 0;
  }

  // Algo Notifications
  setNumberOfUnreadAlgoNotifications(count: number) {
    this.numberOfUnreadAlgoNotifications = count;
  }

  getNumberOfUnreadAlgoNotifications() {
    return this.numberOfUnreadAlgoNotifications;
  }

  decreaseNumberOfUnreadAlgoNotifications() {
    if (this.numberOfUnreadAlgoNotifications > 0) {
      this.numberOfUnreadAlgoNotifications--;
    }
  }

  // Wallet Notifications
  setNumberOfUnreadWalletNotifications(count: number) {
    this.numberOfUnreadWalletNotifications = count;
  }

  getNumberOfUnreadWalletNotifications() {
    return this.numberOfUnreadWalletNotifications;
  }

  decreaseNumberOfUnreadWalletNotifications() {
    if (this.numberOfUnreadWalletNotifications > 0) {
      this.numberOfUnreadWalletNotifications--;
    }
  }

  // System Notifications
  setNumberOfUnreadSystemNotifications(count: number) {
    this.numberOfUnreadSystemNotifications = count;
  }

  getNumberOfUnreadSystemNotifications() {
    return this.numberOfUnreadSystemNotifications;
  }

  decreaseNumberOfUnreadSystemNotifications() {
    if (this.numberOfUnreadSystemNotifications > 0) {
      this.numberOfUnreadSystemNotifications--;
    }
  }
}
