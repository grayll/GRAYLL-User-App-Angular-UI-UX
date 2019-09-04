import {RouterModule, Routes} from '@angular/router';
import {NotificationsComponent} from './notifications.component';
import {NgModule} from '@angular/core';
import {NotificationDetailPopupComponent} from './notification-detail-popup/notification-detail-popup.component';

const popupRoutes: Routes = [
  {
    path: 'detail',
    component: NotificationDetailPopupComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: NotificationsComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {}
