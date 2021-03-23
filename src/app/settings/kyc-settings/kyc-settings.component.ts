import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SnotifyService } from 'ng-snotify';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc-settings',
  templateUrl: './kyc-settings.component.html',
  styleUrls: ['./kyc-settings.component.css']
})
export class KycSettingsComponent implements OnInit {

  userData = {
    firstName: '',
    lastName: '',
    birthday: '',
    nationality: '',
    governmentID: '',
    personalORcompany: ''
  }

  companyData = {
    companyName: '',
    companyRegistration: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: ''
  }

  model: NgbDateStruct;
  faCalendar = faCalendar;
  fileToUpload: File = null;

  idUploadActive = false;
  passport = "";
  nationalID = "";
  driverLicense = "";

  government_id_select = "";
  income_select = "";
  address_select = "";
  personal_liquid_assets_select = "";
  company_registration_select = "";
  company_financials_select = "";
  isFileUploaded = false;

  @ViewChild('fileUploader') fileUploader: ElementRef;

  constructor(private snotifyService: SnotifyService, private router: Router) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      console.log(files);
      this.router.navigate(['/settings/profile', { outlets: { popup: 'kyc-document-upload-in-progress' } }])
  }

  usersave() {
    this.snotifyService.simple('Your user data changes are saved.');
  }

  companysave() {
    this.snotifyService.simple('Your company data changes are saved.');
  }

  idCheck(event) {
    this.fileUploader.nativeElement.click();
    this.government_id_select = event.target.value;
    console.log("event:", event.target.value)
  }

  incomeCheck(event) {
    this.fileUploader.nativeElement.click();
    this.income_select = event.target.value;
  }

  addressCheck(event) {
    this.fileUploader.nativeElement.click();
    this.address_select = event.target.value;
  }

  personalLiquidAssetsCheck(event) {
    this.fileUploader.nativeElement.click();
    this.personal_liquid_assets_select = event.target.value;
  }

  companyRegistrationCheck(event) {
    this.fileUploader.nativeElement.click();
    this.company_registration_select = event.target.value;
  }

  companyFinancialsCheck(event) {
    this.fileUploader.nativeElement.click();
    this.company_financials_select = event.target.value;
  }
}
