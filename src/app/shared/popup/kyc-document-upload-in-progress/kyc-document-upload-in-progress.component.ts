import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kyc-document-upload-in-progress',
  templateUrl: './kyc-document-upload-in-progress.component.html',
  styleUrls: ['./kyc-document-upload-in-progress.component.css']
})
export class KycDocumentUploadInProgressComponent implements OnInit {

  @ViewChild('content') modal;

  state: Boolean = false;
  constructor(private popupService : PopupService, private router: Router) { }

  ngOnInit() {
    this.popupService.open(this.modal);
    setTimeout(() => {
      this.popupService.close().then(() => {
        if(!this.state) {
          setTimeout(() => {
            this.router.navigate(['/settings/profile', {outlets: {popup: 'kyc-document-upload-successful'}}]);
          }, 100);
        }
      })

    }, 2000);
  }
 
  close() {
    this.popupService.close().then(() => {
      this.state = true;
      setTimeout(() => {
        this.router.navigate(['/settings/profile', {outlets: {popup: 'kyc-document-upload-unsuccessful'}}]);
      }, 100);
    });
  }
}

