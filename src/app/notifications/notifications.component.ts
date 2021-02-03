import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {faBell, faExclamationTriangle, faSearch, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {AlgoNotificationModel, GeneralNotificationModel, WalletNotificationModel} from './notification.model';
import {NotificationsService} from './notifications.service';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {SharedService} from '../shared/shared.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  systemNotifications: GeneralNotificationModel[] = [];
  systemNotificationsToShow: GeneralNotificationModel[] = [];

  private walletNotificationsMobileScrollContainer: Element;
  private algoNotificationsMobileScrollContainer: Element;
  private generalNotificationsMobileScrollContainer: Element;

  // Font Awesome Icons
  faWarning = faExclamationTriangle;
  faBell = faBell;
  faCheckCircle = faCheckCircle;
  faSearch = faSearch;
  notifiType: any = '';
  constructor(
    public notificationsService: NotificationsService,
    public sharedService: SharedService,
    public modalService: NgbModal,
  ) {
    this.populateNotifications();
    this.populateNumberOfUnreadNotifications();
  }

  ngOnInit() {
    this.changeBackgroundColor(true);
    setTimeout(() => {
      this.loadMobileNotificationContainers();
    }, 100);
  }

  private changeBackgroundColor(addClass: boolean) {
    const body = document.getElementsByTagName('body')[0];
    addClass ? body.classList.add('dark-navy-background') : body.classList.remove('dark-navy-background');
    addClass ? body.classList.add('dark-navy-bg') : body.classList.remove('dark-navy-bg');
  }

  private loadMobileNotificationContainers() {
    const elements: NodeListOf<Element> = document.querySelectorAll('.scroll-cont');
    this.algoNotificationsMobileScrollContainer = elements[0];
    this.walletNotificationsMobileScrollContainer = elements[1];
    this.generalNotificationsMobileScrollContainer = elements[2];
    disableBodyScroll(this.algoNotificationsMobileScrollContainer);
    disableBodyScroll(this.walletNotificationsMobileScrollContainer);
    disableBodyScroll(this.generalNotificationsMobileScrollContainer);
  }

  ngOnDestroy(): void {
    this.changeBackgroundColor(false);
    enableBodyScroll(this.algoNotificationsMobileScrollContainer);
    enableBodyScroll(this.walletNotificationsMobileScrollContainer);
    enableBodyScroll(this.generalNotificationsMobileScrollContainer);
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
        18,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
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
      new WalletNotificationModel(
        3,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new WalletNotificationModel(
        4,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        true,
        Date.now()
      ),
      new WalletNotificationModel(
        13,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new WalletNotificationModel(
        14,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new WalletNotificationModel(
        16,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new WalletNotificationModel(
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
      new GeneralNotificationModel(
        5,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        false,
        Date.now()
      ),
      new GeneralNotificationModel(
        15,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        false,
        Date.now()
      ),
      new GeneralNotificationModel(
        17,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        false,
        Date.now()
      ),
      new GeneralNotificationModel(
        6,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        false,
        Date.now()
      ),
      new GeneralNotificationModel(
        7,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        true,
        Date.now()
      ),
      new GeneralNotificationModel(
        8,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
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

  markSystemNotificationAsRead(notification: GeneralNotificationModel) {
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

  openConfirmModal(modal, type) {
    console.log("Here", modal);
    this.notifiType = type;
    this.modalService.open(modal).result.then(
      res => {
        this.notifiType = '';
      },
      res => {
        this.notifiType = '';
      }
    );
  }

  markAsRead(modal) {
    if (this.notifiType === 'algo') {
      this.algoNotificationsToShow.forEach(ele => {
        ele.isRead = true;
      });
      this.notificationsService.decreaseNumberOfAllUnreadNotificationsBy(this.notificationsService.getNumberOfUnreadAlgoNotifications());
      this.notificationsService.setNumberOfUnreadAlgoNotifications(0);
      console.log(this.notificationsService.getNumberOfUnreadAlgoNotifications());
    }
    if (this.notifiType === 'wallet') {
      this.walletNotificationsToShow.forEach(ele => {
        ele.isRead = true;
      });
      this.notificationsService.decreaseNumberOfAllUnreadNotificationsBy(this.notificationsService.getNumberOfUnreadWalletNotifications());
      this.notificationsService.setNumberOfUnreadWalletNotifications(0);
    }
    if (this.notifiType === 'general') {
      this.systemNotificationsToShow.forEach(ele => {
        ele.isRead = true;
      });
      this.notificationsService.decreaseNumberOfAllUnreadNotificationsBy(this.notificationsService.getNumberOfUnreadSystemNotifications())
      this.notificationsService.setNumberOfUnreadSystemNotifications(0);
    }
    this.modalService.dismissAll();
  }

}
