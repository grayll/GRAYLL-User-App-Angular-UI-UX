import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlgoNotificationModel} from '../../notifications/notification.model';
import {faChevronCircleUp, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-algo-notification-item',
  templateUrl: './algo-notification-item.component.html',
  styleUrls: ['./algo-notification-item.component.css']
})
export class AlgoNotificationItemComponent implements OnInit {

  @Input() notification: AlgoNotificationModel;
  @Input() isInPopup: boolean;
  @Output() routeTo = new EventEmitter<string>();
  isContentCollapsed = true;

  faPlus = faPlusCircle;
  faMinus = faChevronCircleUp;
  faExpand: any;

  constructor(
    private router: Router
  ) {
    this.faExpand = this.faPlus;
  }

  ngOnInit() {
  }

  expandNotification() {
    this.isContentCollapsed = !this.isContentCollapsed;
    this.faExpand = this.isContentCollapsed ? this.faPlus : this.faMinus;
  }

  goTo(link: string) {
    if (this.isInPopup) {
      this.routeTo.emit(link);
    } else {
      this.router.navigate([link]);
    }
  }

}
