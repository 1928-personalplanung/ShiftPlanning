import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewComponent } from './main-view.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MainViewComponent
  ],
  exports: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainViewModule { }
