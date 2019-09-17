import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {UserManagementComponent} from './user-management/user-management.component';

const sidebarRoutes: Routes = [
  {
    path: 'user-management',
    component: UserManagementComponent,
    outlet: 'admin'
  },
  {
    path: '',
    component: UserManagementComponent,
    outlet: 'admin'
  }
];

const routes: Routes = [
  {
    path: 'overview',
    component: AdminComponent,
    children: [...sidebarRoutes]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule {}
