import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelMeLaterAComponent } from './del-me-later-a/del-me-later-a.component';
import { DelMeLaterBComponent } from './del-me-later-b/del-me-later-b.component';
import { DelMeLaterCComponent } from './del-me-later-c/del-me-later-c.component';



@NgModule({
  declarations: [DelMeLaterAComponent, DelMeLaterBComponent, DelMeLaterCComponent],
  imports: [
    CommonModule
  ]
})
export class DelMeLaterModule { }
