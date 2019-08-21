import { Component, OnInit } from '@angular/core';
import {faArrowAltCircleDown, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.css']
})
export class AccountActivityComponent implements OnInit {

  selectedTab: {id: string, name: string};
  faClose = faTimesCircle;
  faDownload = faArrowAltCircleDown;
  activityTabs = [
    {
      id: 'allOrders',
      name: 'All Orders'
    },
    {
      id: 'transfers',
      name: 'Transfers'
    },
    {
      id: 'networkHistory',
      name: 'Network History'
    }
  ];

  constructor() {
    this.selectedTab = this.activityTabs[0];
  }

  ngOnInit() {
  }

  onTabChange(id: string) {
    this.selectedTab = this.activityTabs.find((t) => t.id === id);
  }

}
