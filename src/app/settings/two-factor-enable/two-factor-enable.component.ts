import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
  selector: 'app-two-factor-enable',
  templateUrl: './two-factor-enable.component.html',
  styleUrls: ['./two-factor-enable.component.css']
})
export class TwoFactorEnableComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
