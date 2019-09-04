import {Component, Input, OnInit} from '@angular/core';
import {AlgoNotificationModel} from '../notification.model';

@Component({
  selector: 'app-algo-notification-item',
  templateUrl: './algo-notification-item.component.html',
  styleUrls: ['./algo-notification-item.component.css']
})
export class AlgoNotificationItemComponent implements OnInit {

  @Input() notification: AlgoNotificationModel;

  constructor() { }

  ngOnInit() {
  }

}
