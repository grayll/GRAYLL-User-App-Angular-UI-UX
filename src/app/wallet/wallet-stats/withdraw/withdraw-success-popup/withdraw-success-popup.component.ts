import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';

@Component({
  selector: 'app-withdraw-success-popup',
  templateUrl: './withdraw-success-popup.component.html',
  styleUrls: ['./withdraw-success-popup.component.scss']
})
export class WithdrawSuccessPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
