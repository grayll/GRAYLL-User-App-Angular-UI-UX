import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {SnotifyService} from 'ng-snotify';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../../shared/error/error.service';

@Component({
  selector: 'app-change-email-address',
  templateUrl: './change-email-address.component.html',
  styleUrls: ['./change-email-address.component.css']
})
export class ChangeEmailAddressComponent implements OnInit {

  @ViewChild('content') modal;
  form: FormGroup;

  get currentEmail() { return this.form.get('currentEmail'); }
  get newEmail() { return this.form.get('newEmail'); }
  get confirmNewEmail() { return this.form.get('confirmNewEmail'); }

  constructor(
    public popupService: PopupService,
    private snotifyService: SnotifyService,
    private errorService: ErrorService,
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      currentEmail: [null, [Validators.required, Validators.email]],
      newEmail: [null, [Validators.required, Validators.email]],
      confirmNewEmail: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  private clientValidation(): boolean {
    if (!this.currentEmail.value || !this.newEmail.value || !this.confirmNewEmail.value) {
      this.errorService.handleError(null, 'All fields are required.');
      return false;
    }
    if (!this.errorService.isEmailAddressValid(this.currentEmail.value)) {
      this.errorService.handleError(null, 'Please enter a valid current email address.');
      return false;
    }
    if (!this.errorService.isEmailAddressValid(this.newEmail.value)) {
      this.errorService.handleError(null, 'Please enter a valid new email address.');
      return false;
    }
    if (this.confirmNewEmail.value !== this.newEmail.value) {
      this.errorService.handleError(null, 'Please correctly confirm your new email address.');
      return false;
    }
    return true;
  }

  save() {
    this.errorService.clearError();
    if (this.clientValidation()) {
      this.onSaveSuccess();
    }
  }

  onSaveSuccess() {
    this.popupService.close().then(() => {
      this.snotifyService.simple('Email address saved.');
    });
  }

}
