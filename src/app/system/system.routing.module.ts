import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {NgModule} from '@angular/core';

const popupRoutes: Routes = [];

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
