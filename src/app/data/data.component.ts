import {Component, OnDestroy, OnInit} from '@angular/core';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {SharedService} from '../shared/shared.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, OnDestroy {

  // Font Awesome Icons
  faWarning = faExclamationTriangle;
  activeTabId: string;
  activeSubTabId: string;

  constructor(
    public sharedService: SharedService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.loadDataFromRoute();
    this.changeBackgroundColor(true);
  }

  ngOnDestroy(): void {
    this.changeBackgroundColor(false);
  }

  private loadDataFromRoute() {
    const data = this.activatedRoute.snapshot.data;
    if (data.tab) {
      switch (data.tab) {
        case 'system-activity':
          this.activeTabId = 'system-activity';
          this.activeSubTabId = 'closedAlgoPositions';
          break;
        default:
          if (data.subTab) {
            this.activeTabId = 'wallet-activity';
            this.activeSubTabId = data.subTab;
            break;
          }
      }
      this.activeTabId = data.tab;
      setTimeout(() => {
        const el = document.getElementById('tabs');
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, 500);
    }
  }

  private changeBackgroundColor(addClass: boolean) {
    const body = document.getElementsByTagName('body')[0];
    addClass ? body.classList.add('dark-navy-background') : body.classList.remove('dark-navy-background');
  }

}
