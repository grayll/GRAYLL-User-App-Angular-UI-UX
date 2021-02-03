import {Component} from '@angular/core';
import {faEnvelope, faKey, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorService} from '../../shared/error/error.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userIcon = faUser;
  emailIcon = faEnvelope;
  keyIcon  = faKey;
  registerForm: FormGroup;
  honeypot: any = '';
  get name() { return this.registerForm.get('name') }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ErrorService,
    private router: Router
  ) {
    this.initForm();
  }

  private initForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  private clientValidation() {
    if (!this.name || (this.name && !this.name.value)) {
      this.errorService.handleError(null, 'Please enter your name.');
      return false;
    }
    if (!this.email || (this.email && !this.email.value)) {
      this.errorService.handleError(null, 'Please enter your email address.');
      return false;
    }
    if (!this.password || (this.password && !this.password.value)) {
      this.errorService.handleError(null, 'Please enter your password.');
      return false;
    }
    if (!this.errorService.isEmailAddressValid(this.email.value)) {
      this.errorService.handleError(null, 'Please enter a valid email address.');
      return false;
    }
    return true;
  }

  registerClicked() {
    if (!this.clientValidation()) { return; }
    if (this.honeypot) {
      return false;
    }
    this.errorService.clearError();
    this.router.navigate(['/login/confirm-email']);
  }

}
