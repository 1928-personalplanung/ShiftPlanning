import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, CdkDragStart, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Worker } from '../dto/worker/worker';
import { TagTypes } from '../dto/tag/tag-types.enum';
import { PlannerService, ShiftGroupListItem } from './planner.service';

@Component({
  selector: 'sp-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  readonly stations = [
    {id: 1, label: 'Station 1'},
    {id: 2, label: 'Station 2'},
    {id: 3, label: 'Station 3'},
    {id: 4, label: 'Station 4'},
  ];

  readonly workers: Worker[] = [
    { id: 1, name: 'Mitarbeiter 1', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 2, name: 'Mitarbeiter 2', hoursWorkedInCurrentMonth: 42, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 3, name: 'Mitarbeiter 3', hoursWorkedInCurrentMonth: 36, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 4, name: 'Mitarbeiter 4', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [{
        id       : 1234,
        workerId: 456,
        tagTypeId: 1,
        startDate: 1584873478753,
        endDate  : 1584873478754,
      }], score: 0.5 },
    { id: 5, name: 'Mitarbeiter 5', hoursWorkedInCurrentMonth: 45, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 6, name: 'Mitarbeiter 6', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 20, tags: [], score: 0.5 },
    { id: 7, name: 'Mitarbeiter 7', hoursWorkedInCurrentMonth: 20, targetHoursInCurrentMonth: 40, tags: [{
        id       : 1234,
        workerId: 456,
        tagTypeId: 2,
        startDate: 1584873478753,
        endDate  : 1584873478754,
      }], score: 0.5 },
    { id: 8, name: 'Mitarbeiter 8', hoursWorkedInCurrentMonth: 39, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 9, name: 'Mitarbeiter 9', hoursWorkedInCurrentMonth: 15, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 10, name: 'Mitarbeiter 10', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 11, name: 'Mitarbeiter 11', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 12, name: 'Mitarbeiter 12', hoursWorkedInCurrentMonth: 32, targetHoursInCurrentMonth: 25, tags: [], score: 0.5 },
    { id: 13, name: 'Mitarbeiter 13', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [], score: 0.5 },
    { id: 14, name: 'Mitarbeiter 14', hoursWorkedInCurrentMonth: 35, targetHoursInCurrentMonth: 40, tags: [{
        id       : 1234,
        workerId: 456,
        tagTypeId: 11,
        startDate: 1584873478753,
        endDate  : 1584873478754,
      }], score: 0.5 },
    {
      id: 15, name: 'Mitarbeiter 15', hoursWorkedInCurrentMonth: 30, targetHoursInCurrentMonth: 40, tags: [ {
        id       : 1234,
        workerId: 456,
        tagTypeId: 22,
        startDate: 1584873478753,
        endDate  : 1584873478754
      } ],
      score: 0.5
    },
  ];

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

  // readonly shiftGroups = [
  //   {
  //     label: 'Frueh',
  //     icon: 'brightness_5',
  //     shifts: [
  //       {id: 1, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 2, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 3, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {
  //         id: 4,
  //         workers: [],
  //         disabled: false,
  //         disabledMsg: null,
  //         notSatisfied: false,
  //         notSatisfiedMsg: null
  //       },
  //       {id: 5, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 6, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 7, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //
  //       {id: 8, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 9, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 10, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 11, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 12, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 13, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 14, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
  //     ]
  //   },
  //   {
  //     label: 'Spaet',
  //     icon: 'wb_sunny',
  //     shifts: [
  //       {id: 15, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 16, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 17, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 18, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 19, workers: [], disabled: false, disabledMsg: null, notSatisfied: true, notSatisfiedMsg: 'Es fehlen noch 2 Mitarbeiter'},
  //       {id: 20, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 21, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //
  //       {id: 22, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 23, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 24, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 25, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 26, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 27, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 28, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
  //     ]
  //   },
  //   {
  //     label: 'Nacht',
  //     icon: 'brightness_3',
  //     shifts: [
  //       {id: 29, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 30, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 31, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 32, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 33, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 34, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 35, workers: [], disabled: false, disabledMsg: null, notSatisfied: true, notSatisfiedMsg: 'Es fehlt noch 1 Mitarbeiter'},
  //
  //       {id: 36, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 37, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 38, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 39, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 40, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 41, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
  //       {id: 42, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
  //     ]
  //   }
  // ];

  stationControl = new FormControl(null);
  shiftGroups: ShiftGroupListItem[];

  constructor( private $planner: PlannerService) {
  }

  ngOnInit(): void {
    // todo remove mock
    // this.shiftGroups[0].shifts[2].workers.push(this.workers[3]);
    this.$planner.getShiftFromRangeGrouped ( '2020-03-16T00:00:00', 14 )
             .subscribe( n => {
               this.shiftGroups = n;
               // this.shiftGroups[0].shifts[2].workers.push(this.workers[3]);
             } );
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
    this.shiftGroups[shiftGroupRI].shifts[shiftRI].disabled = true;
    this.shiftGroups[shiftGroupRI].shifts[shiftRI].disabledMsg = 'Zu viel arbeit für einen Mitarbeiter';
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
}
