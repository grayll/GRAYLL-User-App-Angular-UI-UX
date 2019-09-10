import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {faBell, faChevronCircleDown, faChevronCircleUp, faSearch} from '@fortawesome/free-solid-svg-icons';
import {AlgoNotificationModel, SystemNotificationModel, WalletNotificationModel} from './notification.model';
import {NotificationsService} from './notifications.service';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  @ViewChild(NgbCarousel) carousel;

  private isShowingAllAlgoNotifications = true;
  private isShowingAllWalletNotifications = true;
  private isShowingAllSystemNotifications = true;

  algoNotifications: AlgoNotificationModel[] = [];
  algoNotificationsToShow: AlgoNotificationModel[] = [];
  walletNotifications: WalletNotificationModel[] = [];
  walletNotificationsToShow: WalletNotificationModel[] = [];
  systemNotifications: SystemNotificationModel[] = [];
  systemNotificationsToShow: SystemNotificationModel[] = [];

  // Font Awesome Icons
  faBell = faBell;
  faSearch = faSearch;
  faUp = faChevronCircleUp;
  faDown = faChevronCircleDown;

  constructor(
    public notificationsService: NotificationsService
  ) {
    this.populateNotifications();
    this.populateNumberOfUnreadNotifications();
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('overflow-hidden');
    body.classList.add('overflow-auto');
  }

  private populateNotifications() {
    this.algoNotifications = [
      new AlgoNotificationModel(
        1,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      ),
      new AlgoNotificationModel(
        2,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        10,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      ),
      new AlgoNotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        12,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      )
  ];
    this.algoNotificationsToShow = this.algoNotifications;
    this.walletNotifications = [
      new AlgoNotificationModel(
        3,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        4,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      ),
      new AlgoNotificationModel(
        13,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        14,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        9,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      )
    ];
    this.walletNotificationsToShow = this.walletNotifications;
    this.systemNotifications = [
      new AlgoNotificationModel(
        5,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        15,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        6,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        7,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      ),
      new AlgoNotificationModel(
        8,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
    this.systemNotificationsToShow = this.systemNotifications;
  }

  populateNumberOfUnreadNotifications() {
    this.notificationsService.resetNumberOfAllUnreadNotifications();
    const algoUnread = this.algoNotifications.filter((n) => !n.isRead).length;
    const walletUnread = this.walletNotifications.filter((n) => !n.isRead).length;
    const systemUnread = this.systemNotifications.filter((n) => !n.isRead).length;
    this.notificationsService.increaseNumberOfAllUnreadNotificationsBy(algoUnread + walletUnread + systemUnread);
    this.notificationsService.setNumberOfUnreadAlgoNotifications(algoUnread);
    this.notificationsService.setNumberOfUnreadWalletNotifications(walletUnread);
    this.notificationsService.setNumberOfUnreadSystemNotifications(systemUnread);
  }

  filterReadAlgoNotifications() {
    if (this.isShowingAllAlgoNotifications) {
      this.algoNotificationsToShow = this.algoNotifications.filter((n) => !n.isRead);
    } else {
      this.algoNotificationsToShow = this.algoNotifications;
    }
    this.isShowingAllAlgoNotifications = !this.isShowingAllAlgoNotifications;
  }

  filterReadWalletNotifications() {
    if (this.isShowingAllWalletNotifications) {
      this.walletNotificationsToShow = this.walletNotifications.filter((n) => !n.isRead);
    } else {
      this.walletNotificationsToShow = this.walletNotifications;
    }
    this.isShowingAllWalletNotifications = !this.isShowingAllWalletNotifications;
  }

  filterReadSystemNotifications() {
    if (this.isShowingAllSystemNotifications) {
      this.systemNotificationsToShow = this.systemNotifications.filter((n) => !n.isRead);
    } else {
      this.systemNotificationsToShow = this.systemNotifications;
    }
    this.isShowingAllSystemNotifications = !this.isShowingAllSystemNotifications;
  }

  markAlgoNotificationAsRead(notification: AlgoNotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllUnreadNotifications();
      this.notificationsService.decreaseNumberOfUnreadAlgoNotifications();
    }
  }

  markWalletNotificationAsRead(notification: WalletNotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllUnreadNotifications();
      this.notificationsService.decreaseNumberOfUnreadWalletNotifications();
    }
  }

  markSystemNotificationAsRead(notification: SystemNotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllUnreadNotifications();
      this.notificationsService.decreaseNumberOfUnreadSystemNotifications();
    }
  }

  swipeLeft() {
    this.carousel.next();
  }

  swipeRight() {
    this.carousel.prev();
  }

}
