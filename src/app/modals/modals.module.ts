import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OfftimeModalComponent } from './offtime-modal/offtime-modal.component';

@NgModule ( {
  declarations: [

    OfftimeModalComponent
  ],
  exports: [
    OfftimeModalComponent
  ],
  imports     : [
    CommonModule,
    SharedModule
  ]
} )
export class ModalsModule {
}
