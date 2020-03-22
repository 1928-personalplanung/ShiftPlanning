import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailDrawerComponent } from './detail-drawer/detail-drawer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule ( {
  declarations: [
    DetailDrawerComponent
  ],
  exports     : [
    DetailDrawerComponent
  ],
  imports     : [
    CommonModule,
    SharedModule,
    RouterModule
  ]
} )
export class DetailsModule {
}
