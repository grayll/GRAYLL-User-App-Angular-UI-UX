import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCollapseModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
