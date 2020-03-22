import { Component } from '@angular/core';
import { AppDrawerCtrlService } from './app-drawer-ctrl.service';
import { AppModalCtrlService } from './app-modal-ctrl.service';
import { ShiftService } from './dto/shift/shift.service';
import { StationService } from './dto/station/station.service';
import { PlannerService } from './main-view/planner.service';
import { map } from 'rxjs/operators';
import { Shift } from './dto/shift/shift';
import { start } from 'repl';
import { TagService } from './dto/tag/tag.service';
import { WorkerService } from './dto/worker/worker.service';

@Component ( {
  selector   : 'sp-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  constructor( public $drawer: AppDrawerCtrlService,
               public $modal: AppModalCtrlService,
               public $planner: PlannerService,
               public $tag: TagService,
               public $worker: WorkerService
               ) {
    // $planner.getShiftFromRangeGrouped ( '2020-03-16T00:00:00', 14 )
    //         .subscribe( n => console.log (n));
    // $tag.getList()
    //         .subscribe( n => console.log (n));
    // $tag.getList( 1 )
    //         .subscribe( n => console.log (n));
    $worker.getList(  )
            .subscribe( n => console.log (n));
    // $worker.getByID( 1 )
    //         .subscribe( n => console.log (n));


  }
}
