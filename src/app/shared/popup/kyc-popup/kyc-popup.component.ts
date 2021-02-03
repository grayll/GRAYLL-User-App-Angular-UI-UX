import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';
import { SettingsService } from '../../../settings/settings.service';

@Component({
  selector: 'app-kyc-popup',
  templateUrl: './kyc-popup.component.html',
  styleUrls: ['./kyc-popup.component.css']
})
export class KycPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor( public popupService: PopupService, private router: Router, private settingService: SettingsService) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }
 
  gotoKycSettings() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile']);
        this.settingService.setActiveId('KYC');
      }, 100);
    });
  }

  closePopup() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile']);
        this.settingService.setActiveId('KYC');
      }, 100);
    });
  }
}
