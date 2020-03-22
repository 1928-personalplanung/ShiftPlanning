import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem, CdkDragStart} from '@angular/cdk/drag-drop';

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

  readonly workers = [
    {id: 1, name: 'Mitarbeiter 1', hoursWorked: 30, targetHours: 40},
    {id: 2, name: 'Mitarbeiter 2', hoursWorked: 42, targetHours: 40},
    {id: 3, name: 'Mitarbeiter 3', hoursWorked: 30, targetHours: 40},
    {id: 4, name: 'Mitarbeiter 4', hoursWorked: 30, targetHours: 40},
    {id: 5, name: 'Mitarbeiter 5', hoursWorked: 45, targetHours: 40},
    {id: 6, name: 'Mitarbeiter 6', hoursWorked: 30, targetHours: 20},
    {id: 7, name: 'Mitarbeiter 7', hoursWorked: 20, targetHours: 40},
    {id: 8, name: 'Mitarbeiter 8', hoursWorked: 30, targetHours: 40},
    {id: 9, name: 'Mitarbeiter 9', hoursWorked: 15, targetHours: 40},
    {id: 10, name: 'Mitarbeiter 10', hoursWorked: 30, targetHours: 40},
    {id: 11, name: 'Mitarbeiter 11', hoursWorked: 30, targetHours: 40},
    {id: 12, name: 'Mitarbeiter 12', hoursWorked: 32, targetHours: 25},
    {id: 13, name: 'Mitarbeiter 13', hoursWorked: 30, targetHours: 40},
    {id: 14, name: 'Mitarbeiter 14', hoursWorked: 35, targetHours: 40},
    {id: 15, name: 'Mitarbeiter 15', hoursWorked: 30, targetHours: 40}
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

  readonly shiftGroups = [
    {
      label: 'Frueh',
      icon: 'brightness_5',
      shifts: [
        {id: 1, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 2, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 3, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {
          id: 4,
          workers: [
            {id: 7, name: 'Mitarbeiter 7', hoursWorked: 20, targetHours: 40},
          ],
          disabled: false,
          disabledMsg: null,
          notSatisfied: false,
          notSatisfiedMsg: null
        },
        {id: 5, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 6, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 7, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},

        {id: 8, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 9, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 10, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 11, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 12, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 13, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 14, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
      ]
    },
    {
      label: 'Spaet',
      icon: 'wb_sunny',
      shifts: [
        {id: 15, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 16, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 17, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 18, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 19, workers: [], disabled: false, disabledMsg: null, notSatisfied: true, notSatisfiedMsg: 'Es fehlen noch 2 Mitarbeiter'},
        {id: 20, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 21, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},

        {id: 22, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 23, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 24, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 25, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 26, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 27, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 28, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
      ]
    },
    {
      label: 'Nacht',
      icon: 'brightness_3',
      shifts: [
        {id: 29, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 30, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 31, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 32, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 33, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 34, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 35, workers: [], disabled: false, disabledMsg: null, notSatisfied: true, notSatisfiedMsg: 'Es fehlt noch 1 Mitarbeiter'},

        {id: 36, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 37, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 38, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 39, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 40, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 41, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null},
        {id: 42, workers: [], disabled: false, disabledMsg: null, notSatisfied: false, notSatisfiedMsg: null}
      ]
    }
  ];

  stationControl = new FormControl(null);

  constructor() {
  }

  ngOnInit(): void {
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

    // aus der worker list in zelle - check disabled -> copy
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

    // von zelle zu worker list -> remove von zelle
    } else if (event.previousContainer.id !== 'workers-drop-list' && event.container.id === 'workers-drop-list') {
      event.previousContainer.data.workers.splice(event.previousIndex, 1);

    // von worker list zu worker list -> ignore
    } else {

    }
  }
}
