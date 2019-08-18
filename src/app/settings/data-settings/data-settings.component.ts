import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-settings',
  templateUrl: './data-settings.component.html',
  styleUrls: ['./data-settings.component.css']
})
export class DataSettingsComponent implements OnInit {

  reportTime: NgbTimeStruct;

  constructor() { }

  ngOnInit() {
  }

}
