import {Component, Input, OnInit} from '@angular/core';
import {faArrowAltCircleDown, faCopy, faInfoCircle, faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {ClipboardService} from 'ngx-clipboard';
import {SnotifyService} from 'ng-snotify';
import {OrderModel} from './models/order.model';
import {TransfersModel} from './models/transfers.model';
import {NetworkHistoryModel} from './models/network-history.model';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.scss']
})
export class AccountActivityComponent implements OnInit {

  @Input() showMoreDetails: boolean;
  @Input() activeTabId: string;
  @Input() showAllCompletedOrders: boolean;
  @Input() scrollToCompletedOrders: boolean;

  selectedTab: {id: string, name: string};
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

  openOrders: OrderModel[] = [];
  completedOrders: OrderModel[] = [];
  transfers: TransfersModel[] = [];
  networkHistories: NetworkHistoryModel[] = [];

  // Font Awesome Icons
  faDownload = faArrowAltCircleDown;
  faClose = faTimesCircle;
  faInfo = faInfoCircle;
  faCopy = faCopy;
  faSearch = faSearch;

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService
  ) {
    this.selectedTab = this.activityTabs[0];
    this.populateOpenOrders();
    this.populateCompletedOrders();
    this.populateNetworkHistory();
    this.populateTransfers();
  }

  ngOnInit() {
    this.setActiveTab();
  }

  private populateOpenOrders() {
    const mockup = new OrderModel(
      1,
      '18/08/2019 04:14',
      'BUY',
      'GRAYLL',
      'grayll.io',
      '1.00000',
      '0',
      '0.1450',
      '0.1450',
      '0.1450',
      '0.1450'
    );
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
    this.openOrders.push(mockup);
  }

  private populateCompletedOrders() {
    const mockup = new OrderModel(
      1,
      '18/08/2019 04:14',
      'BUY',
      'GRAYLL',
      'grayll.io',
      '1.00000',
      '0',
      '0.1450',
      '0.1450',
      '0.1450',
      '0.1450'
    );
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
    this.completedOrders.push(mockup);
  }

  private populateNetworkHistory() {
    const mockup = new NetworkHistoryModel(
      '0108181408618385411',
      '05/08/2019 20:01',
      'Credited',
      '+15.6850428',
      'XLM'
    );
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
    this.networkHistories.push(mockup);
  }

  private populateTransfers() {
    const mockup = new TransfersModel(
      1,
      '05/08/2019 18:29',
      'GBMF3W...JGX4OG',
      'XLM',
      'Stellar',
      '-29,999,999,999,999.22222'
    );
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
    this.transfers.push(mockup);
  }

  private setActiveTab() {
    if (this.activeTabId) {
      this.selectedTab = this.activityTabs.find((t) => t.id === this.activeTabId);
      if (this.scrollToCompletedOrders) {
        setTimeout(() => {
          const el = document.getElementById('completedOrdersContainer');
          el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }, 500);
      }
    }
  }
  
  onScrollOpenOrders() {
    this.populateOpenOrders();
  }
  
  onScrollCompletedOrders() {
    this.populateCompletedOrders();
  }
  
  onScrollNetworkHistory() {
    this.populateNetworkHistory();
  }
  
  onScrollTransfers() {
    this.populateTransfers();
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
