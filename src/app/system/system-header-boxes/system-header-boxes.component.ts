import { Component, OnInit } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {CountdownConfig} from 'ngx-countdown/src/countdown.config';

@Component({
  selector: 'app-system-header-boxes',
  templateUrl: './system-header-boxes.component.html',
  styleUrls: ['./system-header-boxes.component.css']
})
export class SystemHeaderBoxesComponent implements OnInit {

  faInfo = faInfoCircle;
  countdownConfig: CountdownConfig = {
    leftTime: 60,
    template: '$!s!',
    effect: null,
    demand: false
  };
  GRXValue: string;
  totalGRX: number;

  constructor() {
    this.GRXValue = null;
    this.totalGRX = 99999999999.99998;
  }

  ngOnInit() {
  }

  populateMaxGRX() {
    this.GRXValue = this.totalGRX.toString();
  }

}
