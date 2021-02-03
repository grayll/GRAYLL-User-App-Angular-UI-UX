import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupHeaderComponent} from './popup-header/popup-header.component';
import { KycPopupComponent } from './kyc-popup/kyc-popup.component';
import { KycDocumentUploadInProgressComponent } from './kyc-document-upload-in-progress/kyc-document-upload-in-progress.component';
import { KycDocumentUploadSuccessfulComponent } from './kyc-document-upload-successful/kyc-document-upload-successful.component';
import { KycDocumentUploadUnsuccessfulComponent } from './kyc-document-upload-unsuccessful/kyc-document-upload-unsuccessful.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  declarations: [
    PopupHeaderComponent,
    KycPopupComponent,
    KycDocumentUploadInProgressComponent,
    KycDocumentUploadSuccessfulComponent,
    KycDocumentUploadUnsuccessfulComponent
  ],
  exports: [
    PopupHeaderComponent,
    KycPopupComponent,
    KycDocumentUploadInProgressComponent,
    KycDocumentUploadSuccessfulComponent,
    KycDocumentUploadUnsuccessfulComponent
  ]
})
export class PopupModule { }
