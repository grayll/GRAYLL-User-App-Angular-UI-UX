import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';

@Component({
  selector: 'app-scan-qr-code-two-fa',
  templateUrl: './scan-qr-code-two-fa.component.html',
  styleUrls: ['./scan-qr-code-two-fa.component.css']
})
export class ScanQrCodeTwoFaComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
