import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import {NotificationsRoutingModule} from './notifications.routing.module';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NotificationItemComponent} from './notification-item/notification-item.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
