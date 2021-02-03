import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { faArrowAltCircleDown, faCopy, faInfoCircle, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { OrderModel } from './models/order.model';
import { TransfersModel } from './models/transfers.model';
import { NetworkHistoryModel } from './models/network-history.model';
import { AccountActivityService } from './account-activity.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PdfDownloadService } from 'src/app/_services/pdf-download.service';

@Component({
  selector: 'app-account-activity',
  templateUrl: './account-activity.component.html',
  styleUrls: ['./account-activity.component.scss']
})
export class AccountActivityComponent implements OnInit, OnDestroy {

  @Input() showMoreDetails: boolean;
  @Input() activeTabId: string;
  @Input() showAllCompletedOrders: boolean;
  @Input() scrollToCompletedOrders: boolean;

  selectedTab: { id: string, name: string };
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

  openOrders$: Subscription;
  transfers$: Subscription;
  networkHistories$: Subscription;

  // Font Awesome Icons
  faDownload = faArrowAltCircleDown;
  faClose = faTimesCircle;
  faInfo = faInfoCircle;
  faCopy = faCopy;
  faSearch = faSearch;

  searchControl: FormControl;
  private debounce: number = 400;
  searchResult = [];
  columnNamesForPdf: string[];

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private accountActivityService: AccountActivityService,
    private pdfService: PdfDownloadService
  ) {
    this.selectedTab = this.activityTabs[0];
    this.populateOpenOrders();
    this.populateCompletedOrders();
    this.populateNetworkHistory();
    this.populateTransfers();
  }

  ngOnInit() {
    this.setActiveTab();
    console.log('account-activity component created');
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        if (query) {
          this.search(query);
        }
      });

    //  this.addDataInFirebase(); 

    this.openOrders$ = this.accountActivityService.orders.subscribe(res => {
      this.openOrders = [...res];
    });

    this.transfers$ = this.accountActivityService.transfers.subscribe(res => {
      this.transfers = [...res];
    });

    this.networkHistories$ = this.accountActivityService.networkHistory.subscribe(res => {
      this.networkHistories = [...res];
    });
  }

  addDataInFirebase() {
    let mockup: any = new OrderModel(
      2,
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

    this.accountActivityService.addOrder({ ...mockup });

    mockup = new TransfersModel(
      2,
      '06/08/2019 18:29',
      'sdf3W...JGX4OG',
      'XLM',
      'Stellar',
      '-39,333,999,999,999.22222'
    );

    this.accountActivityService.addTransfer({ ...mockup })

    mockup = new NetworkHistoryModel(
      '0109281408618385411',
      '06/08/2019 20:01',
      'Debited',
      '-15.7650428',
      'XLM',
      null
    );

    this.accountActivityService.addNetworkHistory({ ...mockup });
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
      'XLM',
      'GBMF3W...JGX4OG23'
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
      console.log(this.activeTabId);
      this.selectedTab = this.activityTabs.find((t) => t.id === this.activeTabId);
      if (this.scrollToCompletedOrders) {
        setTimeout(() => {
          const el = document.getElementById('completedOrdersContainer');
          el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
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
    this.searchResult = [];
    this.searchControl.patchValue('');
  }

  copySuccess(account: string) {
    if (this.clipboardService.copyFromContent(account)) {
      this.snotifyService.simple('Copied to clipboard.');
    }
  }

  DownloadPdf() {
    let data = [...this.getCurrentDummyTabData()];

    this.pdfService.savePDF1(this.columnNamesForPdf, Object.keys(data[0]), data, 'pdf_print_' + Date.now());
    console.log('ok');
  }

  getCurrentDummyTabData() {
    if (this.selectedTab.id === 'networkHistory') {
      this.columnNamesForPdf = [
        'Date',
        'Operation',
        'Amount',
        'Asset',
        'Account',
        'Info'
      ];
      return this.networkHistories.map(el => {
        let mock = { ...el, info: 'https://stellar.expert/explorer/public' };
        delete mock.id;
        return mock;
      });
    }
    else if (this.selectedTab.id === 'transfers') {
      this.columnNamesForPdf = [
        'Date',
        'Counterparty',
        'Asset',
        'Issuer',
        'Amount',
        'Info'
      ];
      return this.transfers.map(el => {
        let mock = { ...el, info: 'https://stellar.expert/explorer/public' };
        delete mock.id;
        return mock;
      });
    }
    else {
      this.columnNamesForPdf = [
        'Date',
        'Type',
        'Asset',
        'Issuer',
        'Amount',
        'Filled',
        'Price (XLM)',
        'Price (USD)',
        'Total Price (USD)',
        'Total Price (XLM)'
      ];
      return this.openOrders.map(el => {
        let mock = { ...el };
        delete mock.id;
        return mock;
      });
    }
  }

  search(key) {
    console.log(key);
    this.accountActivityService.search(this.selectedTab.id, { query: key }).then(result => {
      // console.log(result.hits);
      this.searchResult = result.hits.filter(el => {
        let isFind = false;
        Object.values(el._highlightResult).some(highlight => {
          if (highlight['matchLevel'] === 'full') isFind = true;
          return isFind;
        });
        return isFind;
      })
      // this.searchResult = result.hits;
    }, err => {
      this.searchResult = [];
      console.log(err);
    })
  }

  ngOnDestroy() {
    if (this.openOrders$) {
      this.openOrders$.unsubscribe();
    }
    if (this.transfers$) {
      this.transfers$.unsubscribe();
    }
    if (this.networkHistories$) {
      this.networkHistories$.unsubscribe();
    }
  }
}
