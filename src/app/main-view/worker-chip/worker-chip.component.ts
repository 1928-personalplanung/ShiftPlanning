import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Worker } from '../../dto/worker/worker';
import { TagTypes } from '../../dto/tag/tag-types.enum';

@Component({
  selector: 'sp-worker-chip',
  templateUrl: './worker-chip.component.html',
  styleUrls: ['./worker-chip.component.scss']
})
export class WorkerChipComponent implements OnInit {

  private pWorker: Worker;

  @Input('worker')
  get worker(): Worker {
    return this.pWorker;
  }
  set worker(value: Worker) {
    this.pWorker = value;
  }

  constructor() { }

  @HostBinding( 'class.unavailable' )
  get isUnavailable() {
    return this.isSick || this.isOnVacation;
  }

  @HostBinding( 'class.booking-available' )
  get isBookingAvailable() {
    return this.worker.hoursWorkedInCurrentMonth < this.worker.targetHoursInCurrentMonth * 0.8;
  }

  @HostBinding( 'class.booking-limited' )
  get isBookingLimited() {
    return this.worker.hoursWorkedInCurrentMonth >= this.worker.targetHoursInCurrentMonth * 0.8 &&
        this.worker.hoursWorkedInCurrentMonth <= this.worker.targetHoursInCurrentMonth;
  }

  @HostBinding( 'class.booking-overbooked' )
  get isBookingOverbooked() {
    return this.worker.hoursWorkedInCurrentMonth > this.worker.targetHoursInCurrentMonth;
  }

  get isSick() {
    // fixme compare for current shown date-range
    for ( const tag of this.worker.tags ) {
      if ( tag.tagType?.type === TagTypes.SICK ) {
        return true;
      }
    }

    return false;
  }

  get isOnVacation() {
    // fixme compare for current shown date-range
    for ( const tag of this.worker.tags ) {
      if ( tag.tagType?.type === TagTypes.VACATION ) {
        return true;
      }
    }

    return false;
  }

  ngOnInit(): void {
  }

}
