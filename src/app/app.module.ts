import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authorization/login/login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewPasswordComponent } from './authorization/new-password/new-password.component';
import { TwoFactorComponent } from './authorization/two-factor/two-factor.component';
import { RegisterComponent } from './authorization/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './shared/error/error.component';
import {ErrorService} from './shared/error/error.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewPasswordComponent,
    TwoFactorComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
