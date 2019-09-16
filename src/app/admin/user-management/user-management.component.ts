import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor() { }

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
