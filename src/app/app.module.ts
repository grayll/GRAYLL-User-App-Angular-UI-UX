import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorService} from './shared/error/error.service';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {SnotifyModule, SnotifyService} from 'ng-snotify';
import {NotifierConfig} from './shared/configurations/snotify.conf';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SnotifyModule,
    NgbModule
  ],
  providers: [
    ErrorService,
    { provide: 'SnotifyToastConfig', useValue: NotifierConfig},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
