import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainViewComponent} from './main-view/main-view.component';
import { DelMeLaterBComponent } from './del-me-later/del-me-later-b/del-me-later-b.component';
import { DelMeLaterCComponent } from './del-me-later/del-me-later-c/del-me-later-c.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'modalB',
    component: DelMeLaterBComponent,
    outlet: 'modal' },
  { path: 'drawerC',
    component: DelMeLaterCComponent,
    outlet: 'drawer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
