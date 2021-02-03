import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { SnotifyService } from 'ng-snotify';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kyc-settings',
  templateUrl: './kyc-settings.component.html',
  styleUrls: ['./kyc-settings.component.css']
})
export class KycSettingsComponent implements OnInit {

  userData = {
    firstName:'',
    lastName:'',
    birthday:'',
    nationality:'',
    governmentID:'',
    personalORcompany:''
  }

  companyData = {
    companyName:'',
    companyRegistration:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    country:''
  }

  model: NgbDateStruct;
  faCalendar = faCalendar;
  fileToUpload: File = null;

  idUploadActive = false;
  passport = "";
  nationalID = "";
  driverLicense = "";

  government_id_select = "";
  income_select ="";
  address_select = "";
  personal_liquid_assets_select = "";
  company_registration_select = "";
  company_financials_select = ""; 

  constructor(private snotifyService: SnotifyService, private router: Router) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    if( this.government_id_select || this.income_select || this.address_select || this.personal_liquid_assets_select 
       || this.personal_liquid_assets_select || this.company_registration_select || this.company_financials_select  ) {
      this.fileToUpload = files.item(0);
      console.log(files);
      this.router.navigate(['/settings/profile', {outlets: {popup: 'kyc-document-upload-in-progress'}}])
      this.government_id_select = "";
      this.income_select = "";
      this.address_select = "";
      this.personal_liquid_assets_select = "" ;
      this.company_registration_select = "";
      this.company_financials_select = "";
    } else {
      //this.router.navigate(['/settings/profile', {outlets: {popup: 'kyc-document-upload-unsuccessful'}}])
      this.snotifyService.simple('You should select one checkbox')
    }
    
  }

  usersave() {
    this.snotifyService.simple('Your user data changes are saved.');
  }

  companysave() {
    this.snotifyService.simple('Your company data changes are saved.');
  }

  idCheck(event){
    if (event) {
      this.government_id_select = event.target.value;
      console.log("event:", event.target.value)
    }
  }

  incomeCheck(event){
    if (event) {
      this.income_select = event.target.value;
    }
  }

  addressCheck(event){
    if (event) {
      this.address_select = event.target.value;
    }
  }

  personalLiquidAssetsCheck(event){
    if (event) {
      this.personal_liquid_assets_select = event.target.value;
    }
  }

  companyRegistrationCheck(event){
    if (event) {
      this.company_registration_select = event.target.value;
    }
  }

  companyFinancialsCheck(event){
    if (event) {
      this.company_financials_select = event.target.value;
    }
  }
}
