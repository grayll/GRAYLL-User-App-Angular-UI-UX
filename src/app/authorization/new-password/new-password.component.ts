import {Component} from '@angular/core';
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../shared/error/error.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {

  keyIcon  = faKey;
  userIcon = faUser;
  newPasswordForm: FormGroup;

  get password() { return this.newPasswordForm.get('password'); }
  get confirm() { return this.newPasswordForm.get('confirm'); }

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ErrorService
  ) {
    this.initForm();
  }

  private initForm() {
    this.newPasswordForm = this.formBuilder.group({
      password: [null, Validators.required],
      confirm: [null, Validators.required]
    });
  }

  private clientValidation(): boolean {
    if (!this.password || (this.password && !this.password.value)) {
      this.errorService.handleError(null, 'Please enter a new password.');
      return false;
    }
    if (!this.confirm || (this.confirm && !this.confirm.value)) {
      this.errorService.handleError(null, 'Please confirm you new password.');
      return false;
    }
    if (this.confirm.value !== this.password.value) {
      this.errorService.handleError(null, 'Passwords do not match.');
      return false;
    }
    return true;
  }

  submitClicked() {
    if (!this.clientValidation()) { return; }
    this.errorService.clearError();
    alert('Frontend validation passed.');
  }

}
