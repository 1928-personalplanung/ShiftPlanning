import { Injectable } from '@angular/core';
import { Station } from '../dto/station/station';
import { Observable } from 'rxjs';
import { StationService } from '../dto/station/station.service';
import { WorkerService } from '../dto/worker/worker.service';
import { Worker } from '../dto/worker/worker';
import { Shift } from '../dto/shift/shift';
import { ShiftService } from '../dto/shift/shift.service';
import { map } from 'rxjs/operators';

export interface ShiftDragDropItem extends Shift {
  disabled: boolean;
  disabledMsg: null | string;
  notSatisfied: boolean;
  notSatisfiedMsg: null | string;
}

export interface ShiftGroupListItem {
  label: 'Frueh' | 'Spaet' | 'Nacht';
  icon: 'wb_sunny' | 'brightness_5' | 'brightness_3';
  shifts: ShiftDragDropItem[];
}

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
    return this.$worker.getList ();
  }

  getStations(): Observable<Station[]> {
    return this.$statation.getList ();
  }

  getShiftFromRange( startDate: string = '2020-03-16T00:00:00', durationDay: number = 14 ): Observable<Shift[]> {
    return this.$shift.getListFromRange ();
  }

  getShiftFromRangeGrouped( startDate: string = '2020-03-16T00:00:00', durationDay: number = 14 ) {
    return this.getShiftFromRange ( startDate, durationDay )
               .pipe (
                 map ( shifts => {
                   const shiftGroups = this.generateEmptyGroupList ( durationDay );
                   shifts.forEach ( ( shift, index ) => {
                     this.fitToGroup ( shift, shiftGroups );
                   } );
                   return shiftGroups;
                 } )
               );
  }

  private fitToGroup( shift: Shift, shiftGroups: ShiftGroupListItem[] ) {
    const startHoure = new Date ( shift.startDate * 1000 ).getHours ();
    const base       = { disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null };
    let targetGroup: ShiftGroupListItem;
    if ( startHoure < 10 ) {
      targetGroup = shiftGroups[ 1 ];
    } else if ( startHoure < 18 ) {
      targetGroup = shiftGroups[ 1 ];
    } else {
      targetGroup = shiftGroups[ 2 ];
    }
    targetGroup.shifts[6] = { ...targetGroup.shifts[6], ...shift, ...base, notSatisfied: true, notSatisfiedMsg: 'bitte mehr' };
  }

  private generateEmptyGroupList( durationDay: number ): ShiftGroupListItem[] {
    return [
      { label: 'Frueh', icon: 'brightness_5', shifts: this.getDummyShitItemList ( durationDay, 8, 699 ) },
      { label: 'Spaet', icon: 'wb_sunny', shifts: this.getDummyShitItemList ( durationDay, 4, 6 ) },
      { label: 'Nacht', icon: 'brightness_3', shifts: this.getDummyShitItemList ( durationDay, 9, 132 ) }
    ];
  }

  private getDummyShitItem( num: number, disbaleNum: number, notSatisfiedNum: number ): ShiftDragDropItem {
    const base = {
      disabled    : num === disbaleNum,
      disabledMsg : null,
      notSatisfied: num === notSatisfiedNum, notSatisfiedMsg: null
    };
    return { ...base, workers: [] };
  }

  private getDummyShitItemList( num: number = 14, disbaleNum: number, notSatisfiedNum: number ): ShiftDragDropItem[] {
    const list: ShiftDragDropItem[] = [];
    for ( let i = 0; i < num; i ++ ) {
      list.push ( this.getDummyShitItem ( i, disbaleNum, notSatisfiedNum ) );
    }
    return list;
  }
}
