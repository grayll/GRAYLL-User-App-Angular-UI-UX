import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';

@Component({
  selector: 'app-unread-notifications-popup',
  templateUrl: './unread-notifications-popup.component.html',
  styleUrls: ['./unread-notifications-popup.component.css']
})
export class UnreadNotificationsPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  close() {
    alert('After clicking close, notifications will be marked as read. This was just a brief overview so that the user does not have to ' +
      'navigate away from the page to see what\'s new. For more information, she can always go to the Notifications page to read the ' +
      'contents of each notification respectively.');
    this.popupService.close();
  }

}
