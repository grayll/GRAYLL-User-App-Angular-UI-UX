import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GgMapComponent } from './gg-map.component';

@NgModule({
  declarations: [GgMapComponent],
  exports: [
    GgMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GgMapModule { }
