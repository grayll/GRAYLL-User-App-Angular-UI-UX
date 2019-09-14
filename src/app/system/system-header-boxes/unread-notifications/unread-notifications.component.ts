import {Component, OnInit} from '@angular/core';
import {NotificationsService} from '../../../notifications/notifications.service';
import {faBell, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {GRY1NotificationModel} from '../../../notifications/notification.model';
import {CustomModalService} from '../../../shared/custom-modal.service';

@Component({
  selector: 'app-unread-notifications',
  templateUrl: './unread-notifications.component.html',
  styleUrls: [
    './unread-notifications.component.css',
    '../../../shared/custom-modal.scss'
  ]
})

let lastY = 0; // Needed in order to determine direction of scroll.

export class UnreadNotificationsComponent implements OnInit {

  private elements: HTMLCollectionOf<Element>;

  gry1notifications: GRY1NotificationModel[];
  gry2notifications: GRY1NotificationModel[];
  gry3notifications: GRY1NotificationModel[];
  grznotifications: GRY1NotificationModel[];

  // Font Awesome Icons
  faSearch = faSearch;
  faBell = faBell;
  faTimes = faTimes;

  touchStart = function(event) {
    console.log('Touch start');
    lastY = event.touches[0].clientY;
  };

  touchMove = function(event) {
    const top = event.touches[0].clientY;

    // Determine scroll position and direction.
    const scrollTop = event.currentTarget.scrollTop();
    const direction = (lastY - top) < 0 ? 'up' : 'down';

    if (scrollTop === 0 && direction === 'up') {
      // Prevent scrolling up when already at top as this introduces a freeze.
      event.preventDefault();
    } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.outerHeight()) && direction === 'down') {
      // Prevent scrolling down when already at bottom as this also introduces a freeze.
      event.preventDefault();
    }

    lastY = top;
  };

  constructor(
    public notificationsService: NotificationsService,
    private customModalService: CustomModalService
  ) {
    this.populateNotifications();
    this.populateNumberOfUnreadNotifications();
  }

  ngOnInit() {
    this.preventScroll();
  }

  private preventScroll() {
    this.elements = document.getElementsByClassName('mobile-system-nots');
    this.elements.item(0).addEventListener('touchstart', this.touchStart);
    this.elements.item(1).addEventListener('touchstart', this.touchStart);
    this.elements.item(2).addEventListener('touchstart', this.touchStart);
    this.elements.item(3).addEventListener('touchstart', this.touchStart);

    this.elements.item(0).addEventListener('touchmove', this.touchMove);
    this.elements.item(1).addEventListener('touchmove', this.touchMove);
    this.elements.item(2).addEventListener('touchmove', this.touchMove);
    this.elements.item(3).addEventListener('touchmove', this.touchMove);

  }

  private populateNotifications() {
    this.gry1notifications = [
      new GRY1NotificationModel(
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        2,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        2,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
    this.gry2notifications = [
      new GRY1NotificationModel(
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
    this.gry3notifications = [
      new GRY1NotificationModel(
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        2,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new GRY1NotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
    this.grznotifications = [
      new GRY1NotificationModel(
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
  }

  private populateNumberOfUnreadNotifications() {
    this.notificationsService.resetNumberOfAllGrayllSystemNotifications();
    const gry1Unread = this.gry1notifications.filter((n) => !n.isRead).length;
    const gry2Unread = this.gry2notifications.filter((n) => !n.isRead).length;
    const gry3Unread = this.gry3notifications.filter((n) => !n.isRead).length;
    const grzUnread = this.grznotifications.filter((n) => !n.isRead).length;
    this.notificationsService.increaseNumberOfAllGrayllSystemNotificationsBy(gry1Unread + gry2Unread + gry3Unread + grzUnread);
    this.notificationsService.numberOfGRY1Notifications = gry1Unread;
    this.notificationsService.numberOfGRY2Notifications = gry2Unread;
    this.notificationsService.numberOfGRY3Notifications = gry3Unread;
    this.notificationsService.numberOfGRZNotifications = grzUnread;
  }

  markGRY1NotificationAsRead(notification: GRY1NotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllGrayllSystemdNotifications();
      this.notificationsService.decreaseNumberOfGRY1Notifications();
    }
  }

  markGRY2NotificationAsRead(notification: GRY1NotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllGrayllSystemdNotifications();
      this.notificationsService.decreaseNumberOfGRY2Notifications();
    }
  }

  markGRY3NotificationAsRead(notification: GRY1NotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllGrayllSystemdNotifications();
      this.notificationsService.decreaseNumberOfGRY3Notifications();
    }
  }

  markGRZNotificationAsRead(notification: GRY1NotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllGrayllSystemdNotifications();
      this.notificationsService.decreaseNumberOfGRZNotifications();
    }
  }

  closePopup(id: string) {
    switch (id) {
      case 'unread-gry1-notifications':
        this.gry1notifications = this.gry1notifications.filter((n) => !n.isRead);
        break;
      case 'unread-gry2-notifications':
        this.gry2notifications = this.gry2notifications.filter((n) => !n.isRead);
        break;
      case 'unread-gry3-notifications':
        this.gry3notifications = this.gry3notifications.filter((n) => !n.isRead);
        break;
      default:
        this.grznotifications = this.grznotifications.filter((n) => !n.isRead);
        break;
    }
    this.customModalService.close(id);
  }

}
