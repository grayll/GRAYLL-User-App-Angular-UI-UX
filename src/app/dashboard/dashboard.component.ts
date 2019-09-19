import {Component} from '@angular/core';
import {faChartLine, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  faChartLine = faChartLine;
  faWarning = faExclamationTriangle;

  isLoanPaid: boolean;

  constructor() { }

}
