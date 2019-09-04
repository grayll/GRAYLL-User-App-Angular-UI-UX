import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
  selector: 'app-notification-detail-popup',
  templateUrl: './notification-detail-popup.component.html',
  styleUrls: ['./notification-detail-popup.component.css']
})
export class NotificationDetailPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
