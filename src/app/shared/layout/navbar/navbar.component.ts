import {Component} from '@angular/core';
import {faBell, faChartBar, faChartLine, faCommentAlt, faPowerOff, faUser, faWallet, faAt} from '@fortawesome/free-solid-svg-icons';
import {NotificationsService} from '../../../notifications/notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarCollapsed = false;
  faPowerOff = faPowerOff;
  faUser = faUser;
  faBell = faBell;
  faComment = faCommentAlt;
  faChartBar = faChartBar;
  faWallet = faWallet;
  faChartLine = faChartLine;
  faAt = faAt;

  constructor(
    public notificationsService: NotificationsService
  ) { }

}
