import {Component, OnInit} from '@angular/core';
import {faBell, faSearch} from '@fortawesome/free-solid-svg-icons';
import {AlgoNotificationModel, SystemNotificationModel, WalletNotificationModel} from './notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  // Font Awesome Icons
  faBell = faBell;
  faSearch = faSearch;

  algoNotifications: AlgoNotificationModel[] = [];
  walletNotifications: WalletNotificationModel[] = [];
  systemNotifications: SystemNotificationModel[] = [];

  constructor() {
    this.populateNotifications();
  }

  ngOnInit() {}

  private populateNotifications() {
    const notificationTemplate = new AlgoNotificationModel(
      1,
      'GRZ | Arkady',
      '0.11% ROI Increase | 18.81% Total Position ROI',
      10108181408618385411,
      true,
      Date.now()
    );
    const unreadNotificationTemplate = new AlgoNotificationModel(
      1,
      'GRZ | Arkady',
      '0.11% ROI Increase | 18.81% Total Position ROI',
      10108181408618385411,
      false,
      Date.now()
    );
    this.algoNotifications = [
      unreadNotificationTemplate,
      unreadNotificationTemplate,
      notificationTemplate,
      unreadNotificationTemplate,
      notificationTemplate,
      unreadNotificationTemplate,
      notificationTemplate,
      notificationTemplate,
      notificationTemplate,
      notificationTemplate
    ];
    this.walletNotifications = [
      unreadNotificationTemplate,
      notificationTemplate,
      notificationTemplate,
      notificationTemplate,
      notificationTemplate,
      notificationTemplate
    ];
    this.systemNotifications = this.algoNotifications;
  }

  filterReadAlgoNotifications() {
    this.algoNotifications = this.algoNotifications.filter((not) => !not.isRead);
  }

  filterReadWalletNotifications() {
    this.walletNotifications = this.walletNotifications.filter((not) => !not.isRead);
  }

  filterReadSystemNotifications() {
    this.systemNotifications = this.systemNotifications.filter((not) => !not.isRead);
  }

}
