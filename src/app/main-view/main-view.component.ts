import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap, first} from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import {CdkDragDrop, CdkDragStart, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {WorkerService} from '../dto/worker/worker.service';
import {StationService} from '../dto/station/station.service';
import {AppDrawerCtrlService} from '../app-drawer-ctrl.service';
import {Worker} from '../dto/worker/worker';
import {PlannerService, ShiftGroupListItem} from './planner.service';
import {Station} from '../dto/station/station';
import {TagTypes} from '../dto/tag/tag-types.enum';

@Component({
  selector: 'sp-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  stations: Station[];

  workers: Worker[] = [];
  filteredWorkers: Worker[] = [];

  readonly days = [
    'Montag 08.',
    'Dienstag 09.',
    'Mittwoch 10.',
    'Donnerstag 11.',
    'Freitag 12.',
    'Samstag 13.',
    'Sonntag 14.',

    'Montag 15.',
    'Dienstag 16.',
    'Mittwoch 17.',
    'Donnerstag 18.',
    'Freitag 19.',
    'Samstag 20.',
    'Sonntag 21.'
  ];

  shiftGroups: ShiftGroupListItem[];

  stationControl: FormControl = new FormControl(null);
  workerControl: FormControl = new FormControl(null);

  constructor(private $planner: PlannerService,
              private $worker: WorkerService,
              private $drawer: AppDrawerCtrlService,
              private $station: StationService) {
  }

  ngOnInit(): void {
    forkJoin([
      this.$worker.getList().pipe( first() ),
      this.$station.getList().pipe( first() ),
      this.$planner.getShiftFromRangeGrouped ( '2020-03-16T00:00:00', 14 ).pipe(first())
    ]).subscribe(
      ([workersList, stations, shiftGroups]) => {
        workersList.forEach( worker => {
          worker.disableDrag = worker.tags.some( tag => tag.tagType?.type === TagTypes.SICK || tag.tagType?.type === TagTypes.VACATION )
        });
        this.workers = workersList;
        this.filteredWorkers = workersList;
        this.stations = stations;
        this.stationControl = new FormControl(this.stations[0]);
        this.shiftGroups = shiftGroups;
        console.log(this.workers, this.shiftGroups);
      }
    );

    this.workerControl.valueChanges.pipe(
      debounceTime(250),
      filter(value => value.length > 3 || value === ''),
      distinctUntilChanged(),
      switchMap(value => {
        return value === '' ? of(this.workers) :
          of(this.workers.filter(sWorker => sWorker.name.indexOf(value) > -1));
      })
    ).subscribe(result => {
      this.filteredWorkers = result;
    });
  }

  stationDisplayFn(station): string {
    return station && station.name ? station.name : '';
  }

  prevWeeks() {
    // todo change shifts
  }

  nextWeeks() {
    // todo change shifts
  }

  dragWorkerStart(event: CdkDragStart) {
    console.log('dragStart', event, event.source.data);

    const shiftGroupRI = Math.floor(Math.random() * this.shiftGroups.length);
    const shiftRI = Math.floor(Math.random() * this.shiftGroups[shiftGroupRI].shifts.length);
    // this.shiftGroups[shiftGroupRI].shifts[shiftRI].disabled = true;
    // this.shiftGroups[shiftGroupRI].shifts[shiftRI].disabledMsg = 'Zu viel arbeit für einen Mitarbeiter';
  }


  dragWorkerDropped(event: CdkDragDrop<any>) {
    console.log('cdkDragDropped', event);

    // todo reset disabled

    // aus der workers list in zelle - check disabled -> copy
    if (event.previousContainer.id === 'workers-drop-list' && event.container.id !== 'workers-drop-list') {
      if (!event.container.data.disabled) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data.workers,
          event.previousIndex,
          event.currentIndex
        );
      }

      // von zelle zu zelle
      // gleiche zelle -> move
      // unterschiedliche zellen - check disabled -> transfer
    } else if (event.previousContainer.id !== 'workers-drop-list' && event.container.id !== 'workers-drop-list') {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data.workers, event.previousIndex, event.currentIndex);

      } else if (!event.container.data.disabled) {
        transferArrayItem(
          event.previousContainer.data.workers,
          event.container.data.workers,
          event.previousIndex,
          event.currentIndex
        );
      }

      // von zelle zu workers list -> remove von zelle
    } else if (event.previousContainer.id !== 'workers-drop-list' && event.container.id === 'workers-drop-list') {
      event.previousContainer.data.workers.splice(event.previousIndex, 1);

      // von workers list zu workers list -> ignore
    } else {

    }
  }

  openDetails(id: number) {
    this.$drawer.open('drawerC', id);
  }
}
