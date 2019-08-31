import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system.routing.module';
import {SharedModule} from '../shared/shared.module';
import {ActivityComponent} from './activity/activity.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {SystemHeaderBoxesComponent} from './system-header-boxes/system-header-boxes.component';
import {CancelAlgoPositionsComponent} from './activity/cancel-algo-positions/cancel-algo-positions.component';
import {PopupModule} from '../shared/popup/popup.module';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    SystemComponent,
    ActivityComponent,
    SystemHeaderBoxesComponent,
    CancelAlgoPositionsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgbTabsetModule,
    PopupModule,
    CountdownModule
  ]
})
export class SystemModule { }
