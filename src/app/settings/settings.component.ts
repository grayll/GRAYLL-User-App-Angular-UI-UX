import {Component, OnInit} from '@angular/core';
import {faBell, faChartBar, faCommentAlt, faLock, faUser, faWallet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  faUser = faUser;
  faBell = faBell;
  faComment = faCommentAlt;
  faChartBar = faChartBar;
  faWallet = faWallet;
  faLock = faLock;

  constructor() { }

  ngOnInit() {
  }

}
