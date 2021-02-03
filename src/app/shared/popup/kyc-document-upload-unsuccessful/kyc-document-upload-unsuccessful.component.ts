import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../shared/popup/popup.service';

@Component({
  selector: 'app-kyc-document-upload-unsuccessful',
  templateUrl: './kyc-document-upload-unsuccessful.component.html',
  styleUrls: ['./kyc-document-upload-unsuccessful.component.scss']
})
export class KycDocumentUploadUnsuccessfulComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(private popupService : PopupService) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  close() {
    this.popupService.close();
  }

}
