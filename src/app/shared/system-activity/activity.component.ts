import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  faArrowAltCircleDown,
  faCaretDown, faCaretUp,
  faCopy,
  faInfoCircle,
  faSearch,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { CountdownConfig } from 'ngx-countdown/src/countdown.config';
import { AlgoPositionModel } from '../../data/models/algoPositionModel';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AlgoPositionService } from '../algo-position.service';
import { PdfDownloadService } from 'src/app/_services/pdf-download.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, OnChanges {

  @Input() activeTabId: string;
  @Input() showCompletedOrdersLink: boolean;

  openAlgoPositions: AlgoPositionModel[] = [];
  closeAlgoPositions: AlgoPositionModel[] = [];
  algoPositions$: Subscription;

  selectedTab: { id: string, name: string };
  isSortedUpByPositionValue: boolean;
  isSortedUpByPositionProfit: boolean;
  isSortedUpByROI: boolean;
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

  //dropdown items
  dropdownItems = [
    "Close All Algo Positions GRZ",
    "Close All Algo Positions GRY 1",
    "Close All Algo Positions GRY 2",
    "Close All Algo Positions GRY 3"
  ];

  //variable to be sent to the modal
  algoName: any = 'Close All Algo Positions GRZ';

  // Font Awesome Icons
  faDownload = faArrowAltCircleDown;
  faClose = faTimesCircle;
  faInfo = faInfoCircle;
  faCopy = faCopy;
  faSearch = faSearch;
  faSortByPositionValue = faCaretDown;
  faSortByPositionProfit = faCaretDown;
  faSortByROI = faCaretDown;

  searchControl: FormControl;
  searchControl2: FormControl;
  private debounce: number = 400;
  searchResult: {
    openAlgoPositions: AlgoPositionModel[]
    closeAlgoPositions: AlgoPositionModel[]
  } = {
      openAlgoPositions: [],
      closeAlgoPositions: [],
    };

  columnNamesForPDF = [
    'Open Date',
    'Status',
    'Duration',
    'Algorithm',
    'Price (GRX)',
    'Price (USD)',
    'Position Value (USD)',
    'Position Profit (USD)',
    'ROI',
    'GRAYLL Transaction ID',
    'Stellar Transaction ID',
    'Info'
  ]

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private algoPositionService: AlgoPositionService,
    private pdfService: PdfDownloadService
  ) {
    this.populateOpenAlgoPositionsArray();
  }

  ngOnInit() {
    this.setActiveTab();

    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        if (query) {
          this.search(query, 'OPEN');
        }
      });
    this.searchControl2 = new FormControl('');
    this.searchControl2.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        if (query) {
          this.search(query, 'CLOSED');
        }
      });

    // let mockup = new AlgoPositionModel(
    //   1,
    //   '18/12/2019 03:14',
    //   'OPEN',
    //   44401,
    //   'GRY 1',
    //   0.34201,
    //   0.54202,
    //   '4,220,888,221.3333',
    //   '2,444,210,778.3838',
    //   210.32,
    //   '010818199961838546',
    //   '0109181999618385543'
    // );

    // this.algoPositionService.addAlgoPosition({...mockup});

    // this.algoPositions$ = this.algoPositionService.algoPositions.subscribe(res => {
    //   this.openAlgoPositions = [];
    //   this.closeAlgoPositions = [];
    //   console.log('run,', res)
    //   res.map(el => {
    //     if (el && el['status'] === 'OPEN') {
    //       this.openAlgoPositions.push({ ...el });
    //     } else {
    //       this.closeAlgoPositions.push({ ...el });
    //     }
    //   });
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.activeTabId && changes.activeTabId.currentValue) {
      this.selectedTab = this.activityTabs.find((t) => t.id === changes.activeTabId.currentValue);
    }
  }

  private setActiveTab() {
    if (this.activeTabId && this.activeTabId !== 'allOrders' && this.activeTabId !== 'transfers' && this.activeTabId !== 'networkHistory') {
      this.selectedTab = this.activityTabs.find((t) => t.id === this.activeTabId);
    } else {
      this.selectedTab = this.activityTabs[0];
    }
  }

  sortByPositionValue() {
    if (this.isSortedUpByPositionValue) {
      this.faSortByPositionValue = faCaretDown;
      this.isSortedUpByPositionValue = false;
    } else {
      this.faSortByPositionValue = faCaretUp;
      this.isSortedUpByPositionValue = true;
    }
  }

  sortByPositionProfit() {
    if (this.isSortedUpByPositionProfit) {
      this.faSortByPositionProfit = faCaretDown;
      this.isSortedUpByPositionProfit = false;
    } else {
      this.faSortByPositionProfit = faCaretUp;
      this.isSortedUpByPositionProfit = true;
    }
  }

  sortByROI() {
    if (this.isSortedUpByROI) {
      this.faSortByROI = faCaretDown;
      this.isSortedUpByROI = false;
    } else {
      this.faSortByROI = faCaretUp;
      this.isSortedUpByROI = true;
    }
  }

  onTabChange(id: string) {
    this.selectedTab = this.activityTabs.find((t) => t.id === id);
    this.searchControl.patchValue('');
  }

  copySuccess(account: string) {
    if (this.clipboardService.copyFromContent(account)) {
      this.snotifyService.simple('Copied to clipboard.');
    }
  }

  // Infinite Scroll
  onScroll() {
    this.populateOpenAlgoPositionsArray();
  }

  getCountdownConfigFor(duration: number): CountdownConfig {
    return {
      leftTime: duration * 13,
      demand: false,
      template: '$!h!:$!m! | $!d!',
      effect: null
    };
  }

  private populateOpenAlgoPositionsArray() {
    const mockup = new AlgoPositionModel(
      1,
      '18/08/2019 04:14',
      'OPEN',
      86400,
      'GRY 1',
      0.14500,
      0.14500,
      '2,110,000,000.55555',
      '1,000,000,000.55555',
      110.22,
      '0108181408618385411',
      '0108181408618385411'
    );
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
    this.openAlgoPositions.push(mockup);
  }

  DownloadPdf() {
    let data = [...this.getCurrentTabData()];
    this.pdfService.savePDF1(this.columnNamesForPDF, Object.keys(data[0]), data, 'pdf_print_' + Date.now());
    console.log('ok');
  }

  getCurrentTabData() {
    if (this.selectedTab.id === 'closedAlgoPositions') {
      return this.closeAlgoPositions.map(el => {
        let mock = { ...el, info: 'https://stellar.expert/explorer/public' };
        delete mock.id;
        return mock;
      });
    }
    else if (this.selectedTab.id === 'openAlgoPositions') {
      return this.openAlgoPositions.map(el => {
        let mock = { ...el, info: 'https://stellar.expert/explorer/public' };
        delete mock.id;
        return mock;
      });
    }
    else {
      return [...this.openAlgoPositions, ...this.closeAlgoPositions].map(el => {
        let mock = { ...el, info: 'https://stellar.expert/explorer/public' };
        delete mock.id;
        return mock;
      });
    }
  }

  search(key, status) {
    console.log(key);
    this.algoPositionService.search({ query: key, filters: 'status:' + status }).then(result => {
      // console.log(result.hits);
      result.hits = result.hits.filter(el => {
        let isFind = false;
        Object.values(el._highlightResult).some(highlight => {
          if (highlight['matchLevel'] === 'full') isFind = true;
          return isFind;
        });
        return isFind;
      })
      if (status === 'OPEN') {
        this.searchResult.openAlgoPositions = result.hits;
      }
      else {
        this.searchResult.closeAlgoPositions = result.hits;
      }
    }, err => {
      this.searchResult.openAlgoPositions = [];
      this.searchResult.closeAlgoPositions = [];
      console.log(err);
    })
  }

  ngOnDestroy() {
    if (this.algoPositions$) {
      this.algoPositions$.unsubscribe();
    }
  }
}
