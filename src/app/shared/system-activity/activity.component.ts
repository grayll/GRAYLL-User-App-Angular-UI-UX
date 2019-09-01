import { Component, OnInit } from '@angular/core';
import {faArrowAltCircleDown, faCopy, faInfoCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {CountdownConfig} from 'ngx-countdown/src/countdown.config';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  selectedTab: {id: string, name: string};
  activityTabs = [
    {
      id: 'openAlgoPositions',
      name: 'Open Algo Positions'
    },
    {
      id: 'closedAlgoPositions',
      name: 'Closed Algo Positions'
    },
    {
      id: 'allAlgoPositions',
      name: 'All Algo Positions'
    }
  ];
  countdownConfig: CountdownConfig = {
    leftTime: 86400 * 13,
    demand: false,
    template: '$!h!:$!m! | $!d!',
    effect: null
  };

  // Font Awesome Icons
  faDownload = faArrowAltCircleDown;
  faClose = faTimesCircle;
  faInfo = faInfoCircle;
  faCopy = faCopy;

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService
  ) {
    this.selectedTab = this.activityTabs[0];
  }

  ngOnInit() {
  }

  onTabChange(id: string) {
    this.selectedTab = this.activityTabs.find((t) => t.id === id);
  }

  copySuccess(account: string) {
    if (this.clipboardService.copyFromContent(account)) {
      this.snotifyService.simple('Copied to clipboard.');
    }
  }

}
