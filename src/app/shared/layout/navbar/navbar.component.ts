import {Component} from '@angular/core';
import {faBell, faChartBar, faChartLine, faCommentAlt, faPowerOff, faSearch, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';

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
  faSearch = faSearch;

  constructor() { }

}
