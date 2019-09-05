import {Component, Input, OnInit} from '@angular/core';
import {AlgoNotificationModel} from '../notification.model';
import {faChevronCircleUp, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-algo-notification-item',
  templateUrl: './algo-notification-item.component.html',
  styleUrls: ['./algo-notification-item.component.css']
})
export class AlgoNotificationItemComponent implements OnInit {

  @Input() notification: AlgoNotificationModel;
  isContentCollapsed = true;

  faPlus = faPlusCircle;
  faMinus = faChevronCircleUp;
  faExpand: any;

  constructor() {
    this.faExpand = this.faPlus;
  }

  ngOnInit() {
  }

  expandNotification() {
    this.isContentCollapsed = !this.isContentCollapsed;
    this.faExpand = this.isContentCollapsed ? this.faPlus : this.faMinus;
  }

}
