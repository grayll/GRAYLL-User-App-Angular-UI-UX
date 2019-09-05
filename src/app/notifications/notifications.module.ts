import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {NotificationsRoutingModule} from './notifications.routing.module';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AlgoNotificationItemComponent} from './algo-notification-item/algo-notification-item.component';
import {PopupModule} from '../shared/popup/popup.module';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NotificationsComponent,
    AlgoNotificationItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NotificationsRoutingModule,
    PopupModule,
    NgbCollapseModule
  ]
})
export class NotificationsModule { }
