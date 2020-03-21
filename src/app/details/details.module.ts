import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailDrawerComponent } from './detail-drawer/detail-drawer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule ( {
  declarations: [
    DetailDrawerComponent
  ],
  exports     : [
    DetailDrawerComponent
  ],
  imports     : [
    CommonModule,
    SharedModule
  ]
} )
export class DetailsModule {
}
