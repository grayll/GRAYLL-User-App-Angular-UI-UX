import {Component, OnDestroy, OnInit} from '@angular/core';
import {faChartLine, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  faChartLine = faChartLine;
  faWarning = faExclamationTriangle;

  isLoanPaid: boolean;

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('dark-navy-background');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('dark-navy-background');
  }

}
