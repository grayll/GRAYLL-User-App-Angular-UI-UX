import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../popup.service';

@Component({
  selector: 'app-near-balance-status-popup',
  templateUrl: './near-balance-status-popup.component.html',
  styleUrls: ['./near-balance-status-popup.component.css']
})
export class NearBalanceStatusPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
