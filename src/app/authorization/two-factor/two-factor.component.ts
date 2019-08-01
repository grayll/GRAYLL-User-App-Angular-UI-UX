import {Component} from '@angular/core';
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../shared/error/error.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-two-factor',
  templateUrl: './two-factor.component.html',
  styleUrls: ['./two-factor.component.css']
})
export class TwoFactorComponent {

  userIcon = faUser;
  keyIcon  = faKey;
  loginForm: FormGroup;

  get code() { return this.loginForm.get('code'); }

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ErrorService
  ) {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      code: [null, Validators.required],
      dontAskForNext30Days: false
    });
  }

  private clientValidation() {
    if (!this.code || (this.code && !this.code.value)) {
      this.errorService.handleError(null, 'Please enter your code.');
      return false;
    }
    return true;
  }

  loginClicked() {
    if (!this.clientValidation()) { return; }
    this.errorService.clearError();
    alert('Frontend validation passed');
  }

}
