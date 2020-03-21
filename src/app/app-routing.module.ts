import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DelMeLaterAComponent } from './del-me-later/del-me-later-a/del-me-later-a.component';
import { DelMeLaterBComponent } from './del-me-later/del-me-later-b/del-me-later-b.component';
import { DelMeLaterCComponent } from './del-me-later/del-me-later-c/del-me-later-c.component';
import { DetailDrawerComponent } from './details/detail-drawer/detail-drawer.component';

const routes: Routes = [
  { path: '', component: DelMeLaterAComponent },
  { path: 'modalB',
    component: DelMeLaterBComponent,
    outlet: 'modal' },
  { path: 'drawerC',
    component: DetailDrawerComponent,
    outlet: 'drawer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
