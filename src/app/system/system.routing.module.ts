import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {NgModule} from '@angular/core';
import {CancelAlgoPositionsComponent} from '../shared/system-activity/cancel-algo-positions/cancel-algo-positions.component';
import {UnreadNotificationsPopupComponent} from './system-header-boxes/unread-notifications-popup/unread-notifications-popup.component';

const popupRoutes: Routes = [
  {
    path: 'cancel-algo-positions',
    component: CancelAlgoPositionsComponent,
    outlet: 'popup'
  },
  {
    path: 'unread-notifications',
    component: UnreadNotificationsPopupComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: SystemComponent,
    children: [...popupRoutes]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SystemRoutingModule {}
