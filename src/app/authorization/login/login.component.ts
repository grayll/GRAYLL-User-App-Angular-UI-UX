import {Component} from '@angular/core';
import {faKey, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../shared/error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userIcon = faUser;
  keyIcon  = faKey;
  loginForm: FormGroup;

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ErrorService
  ) {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  private clientValidation() {
    if (!this.email || (this.email && !this.email.value)) {
      this.errorService.handleError(null, 'Please enter your email address.');
      return false;
    }
    if (!this.password || (this.password && !this.password.value)) {
      this.errorService.handleError(null, 'Please enter your password.');
      return false;
    }
    if (!this.email.value.includes('@') || !this.email.value.includes('.')) {
      this.errorService.handleError(null, 'Please enter a valid email address.');
      return false;
    }
    return true;
  }

  loginClicked() {
    if (!this.clientValidation()) { return; }
    this.errorService.clearError();
    console.log(this.loginForm.value);
    alert('Frontend validation passed.');
  }

}
