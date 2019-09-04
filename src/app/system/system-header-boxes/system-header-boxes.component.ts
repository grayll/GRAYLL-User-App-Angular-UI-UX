import { Component, OnInit } from '@angular/core';
import {faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {CountdownConfig} from 'ngx-countdown/src/countdown.config';

@Component({
  selector: 'app-system-header-boxes',
  templateUrl: './system-header-boxes.component.html',
  styleUrls: ['./system-header-boxes.component.scss']
})
export class SystemHeaderBoxesComponent implements OnInit {

  faInfo = faInfoCircle;
  GRXValue: string;
  totalGRX: number;
  selectedTab: any;
  countdownConfig: CountdownConfig = {
    leftTime: 60,
    template: '$!s!',
    effect: null,
    demand: false
  };
  algoItems = [
    {
      id: 'GRY 1',
      name: 'GRY | 1',
      value: 'Balthazar',
      tabName: 'Balthzr'
    },
    {
      id: 'GRY 2',
      name: 'GRY | 2',
      value: 'Kaspar',
      tabName: 'Kaspar'
    },
    {
      id: 'GRY 3',
      name: 'GRY | 3',
      value: 'Melkior',
      tabName: 'Melkior'
    },
    {
      id: 'GRZ',
      name: 'GRZ',
      value: 'Arkady',
      tabName: 'Arkady'
    }
  ];
  faBell = faBell;

  constructor() {
    this.GRXValue = null;
    this.totalGRX = 99999999999.99998;
    this.selectedTab = this.algoItems[0];
  }

  ngOnInit() {
  }

  populateMaxGRX() {
    this.GRXValue = this.totalGRX.toString();
  }

  didChangeTab(id: string) {
    this.selectedTab = this.algoItems.find((i) => i.id === id);
  }

  scrollToSystemActivity() {
    const el = document.getElementById('systemActivityTable');
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
