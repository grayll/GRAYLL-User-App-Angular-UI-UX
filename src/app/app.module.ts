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
import { InfoBoxesComponent } from './dashboard/info-boxes/info-boxes.component';
import {ChartsModule} from 'ng2-charts';
import { WalletComponent } from './dashboard/wallet/wallet.component';
import { TradeComponent } from './dashboard/trade/trade.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SettingsComponent } from './settings/settings.component';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {NotifierConfig} from './shared/configurations/snotify.conf';

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
    MainChartComponent,
    InfoBoxesComponent,
    WalletComponent,
    TradeComponent,
    NavbarComponent,
    NotFoundComponent,
    ErrorPageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    NgSelectModule,
    SnotifyModule
  ],
  providers: [
    ErrorService,
    { provide: 'SnotifyToastConfig', useValue: NotifierConfig},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
