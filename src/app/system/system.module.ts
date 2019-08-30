import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system.routing.module';
import {SharedModule} from '../shared/shared.module';
import {ActivityComponent} from './activity/activity.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {SystemHeaderBoxesComponent} from './system-header-boxes/system-header-boxes.component';

@NgModule({
  declarations: [
    SystemComponent,
    ActivityComponent,
    SystemHeaderBoxesComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgbTabsetModule
  ]
})
export class SystemModule { }
