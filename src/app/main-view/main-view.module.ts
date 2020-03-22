import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {MainViewComponent} from './main-view.component';
import {WorkerTooltip} from './worker-tooltip/worker-tooltip.directive';
import {WorkerTooltipComponent} from './worker-tooltip/worker-tooltip.component';

@NgModule({
  declarations: [
    MainViewComponent,
    // WorkerTooltip,
    // WorkerTooltipComponent
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
