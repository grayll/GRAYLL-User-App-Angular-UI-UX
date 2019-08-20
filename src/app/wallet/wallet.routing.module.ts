import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WalletRoutingModule { }
