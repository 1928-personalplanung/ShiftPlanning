import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MainViewComponent } from './main-view.component';
import { WorkerChipComponent } from './worker-chip/worker-chip.component';
import { WorkerInfoTooltipDirective } from './worker-info-tooltip/worker-info-tooltip.directive';
import { WorkerInfoTooltipComponent } from './worker-info-tooltip/worker-info-tooltip.component';

@NgModule({
  declarations: [
    MainViewComponent,
    WorkerChipComponent,
    WorkerInfoTooltipDirective,
    WorkerInfoTooltipComponent
  ],
  exports: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainViewModule {
}
