import { Component } from '@angular/core';
import { AppDrawerCtrlService } from './app-drawer-ctrl.service';
import { AppModalCtrlService } from './app-modal-ctrl.service';
import { ShiftService } from './dto/shift/shift.service';
import { StationService } from './dto/station/station.service';

@Component ( {
  selector   : 'sp-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'shift-planning';

  constructor( public $drawer: AppDrawerCtrlService,
               public $modal: AppModalCtrlService
               ) {
  }
}
