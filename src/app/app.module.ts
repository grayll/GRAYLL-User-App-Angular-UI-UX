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
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderBoxesComponent } from './dashboard/header-boxes/header-boxes.component';
import { MainChartComponent } from './dashboard/main-chart/main-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewPasswordComponent,
    TwoFactorComponent,
    RegisterComponent,
    ErrorComponent,
    DashboardComponent,
    HeaderBoxesComponent,
    MainChartComponent
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
