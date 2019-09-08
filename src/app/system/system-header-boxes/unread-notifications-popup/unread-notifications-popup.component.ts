import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {AlgoNotificationModel} from '../../../notifications/notification.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unread-notifications-popup',
  templateUrl: './unread-notifications-popup.component.html',
  styleUrls: ['./unread-notifications-popup.component.css']
})
export class UnreadNotificationsPopupComponent implements OnInit {

  @ViewChild('content') modal;
  algoNotifications = [];

  constructor(
    public popupService: PopupService,
    private router: Router
  ) {
    this.algoNotifications = [
      new AlgoNotificationModel(
        1,
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
        false,
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
        false,
        Date.now()
      )
    ];
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  close() {
    this.popupService.close();
  }

  goTo(link: string) {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate([link]);
      }, 200);
    });
  }

}
