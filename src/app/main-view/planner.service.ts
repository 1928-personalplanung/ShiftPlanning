import { Injectable } from '@angular/core';
import { Station } from '../dto/station/station';
import { Observable } from 'rxjs';
import { StationService } from '../dto/station/station.service';
import { WorkerService } from '../dto/worker/worker.service';
import { Worker } from '../dto/worker/worker';
import { Shift } from '../dto/shift/shift';
import { ShiftService } from '../dto/shift/shift.service';

@Injectable ( {
  providedIn: 'root'
} )
export class PlannerService {

  constructor( private $statation: StationService,
               private $shift: ShiftService,
               private $worker: WorkerService
  ) {
  }

  getWorker(): Observable<Worker[]> {
    return this.$worker.getList();
  }

  getStations(): Observable<Station[]> {
    return this.$statation.getList();
  }

  getShiftFromRange( startDate: string = '2020-03-16T00:00:00', durationDay: number = 14 ): Observable< Shift[]> {
    return this.$shift.getListFromRange();
  }

}
