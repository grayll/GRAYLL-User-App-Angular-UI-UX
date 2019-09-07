import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {TwoFactorComponent} from './two-factor/two-factor.component';
import {RegisterComponent} from './register/register.component';
import {AuthorizationRoutingModule} from './authorization.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {ConfirmEmailComponent} from './confirm-email/confirm-email.component';

@NgModule({
  declarations: [
    LoginComponent,
    NewPasswordComponent,
    TwoFactorComponent,
    RegisterComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbAlertModule,
    SharedModule
  ]
})
export class AuthorizationModule { }
