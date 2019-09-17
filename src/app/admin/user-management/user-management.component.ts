import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  
  public config: PerfectScrollbarConfigInterface = {};
  
  single: any[];
  dateData: any[];
  dateDataWithRange: any[];
  range = false;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Campaign Success Rate';
  showGridLines = true;
  innerPadding = 0;
  autoScale = true;
  timeline = false;
  barPadding = 5;
  groupPadding = 0;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  view = '';
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;
  rangeFillOpacity = 0.15;
  
  colorScheme = {
    domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#f62d51', '#20c997', '#2962FF']
  };
  schemeType = 'ordinal';
  
  constructor() {
    this.single = [
      {
        name: 'Germany',
        value: 40
      },
        {
          name: 'USA',
          value: 24
        },
        {
          name: 'France',
          value: 36
        },
        {
          name: 'India',
          value: 36
        },
        {
          name: 'Spain',
          value: 33
        },
        {
          name: 'Italy',
          value: 35
        }
      ];
  }

  ngOnInit() {
    const chart2 = c3.generate({
      bindto: '#placeholder',
      data: {
        columns: [
          ['Number of Users', 500, 600, 300, 700, 900, 1000, 1400, 1200, 1100, 900, 800, 700, 163, 500, 600, 300, 700, 900, 1000,
            1400, 1200, 1100, 999, 899, 799, 500]
        ],
        type: 'spline',
      },
      axis: {
        y: {
          show: false
        },
        x: {
          show: true
        }
      },
      padding: {
        top: 40,
        right: 10,
        bottom: 40,
        left: 20
      },
      point: {
        r: 0
      },
      legend: {
        hide: true
      },
      color: {
        pattern: ['#2961ff', '#ff821c', '#ff821c', '#7e74fb']
      }
    });
  }

}
