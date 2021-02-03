import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../shared/popup/popup.service';

@Component({
  selector: 'app-kyc-document-upload-successful',
  templateUrl: './kyc-document-upload-successful.component.html',
  styleUrls: ['./kyc-document-upload-successful.component.scss']
})
export class KycDocumentUploadSuccessfulComponent implements OnInit {

  @ViewChild('content') modal;

  constructor( public popupService : PopupService) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  close() {
    this.popupService.close();
  }
}
