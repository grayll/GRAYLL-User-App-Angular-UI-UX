import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupHeaderComponent} from './popup-header/popup-header.component';
import {PayLoanPopupComponent} from './pay-loan-popup/pay-loan-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupHeaderComponent,
    PayLoanPopupComponent
  ],
  exports: [
    PopupHeaderComponent
  ]
})
export class PopupModule { }
