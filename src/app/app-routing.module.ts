import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainViewComponent} from './main-view/main-view.component';
import { DelMeLaterBComponent } from './del-me-later/del-me-later-b/del-me-later-b.component';
import { DelMeLaterCComponent } from './del-me-later/del-me-later-c/del-me-later-c.component';
import { DetailDrawerComponent } from './details/detail-drawer/detail-drawer.component';
import { OfftimeModalComponent } from './modals/offtime-modal/offtime-modal.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'offtime',
    component: OfftimeModalComponent,
    outlet: 'modal' },
  { path: 'drawerC/:id',
    component: DetailDrawerComponent,
    outlet: 'drawer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
