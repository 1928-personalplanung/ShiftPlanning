import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem} from '@angular/cdk/drag-drop';

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
    {id: 1, label: 'Mitarbeiter 1', hoursWorked: 30, targetHours: 40},
    {id: 2, label: 'Mitarbeiter 2', hoursWorked: 42, targetHours: 40},
    {id: 3, label: 'Mitarbeiter 3', hoursWorked: 30, targetHours: 40},
    {id: 4, label: 'Mitarbeiter 4', hoursWorked: 30, targetHours: 40},
    {id: 5, label: 'Mitarbeiter 5', hoursWorked: 45, targetHours: 40},
    {id: 6, label: 'Mitarbeiter 6', hoursWorked: 30, targetHours: 20},
    {id: 7, label: 'Mitarbeiter 7', hoursWorked: 20, targetHours: 40},
    {id: 8, label: 'Mitarbeiter 8', hoursWorked: 30, targetHours: 40},
    {id: 9, label: 'Mitarbeiter 9', hoursWorked: 15, targetHours: 40},
    {id: 10, label: 'Mitarbeiter 10', hoursWorked: 30, targetHours: 40},
    {id: 11, label: 'Mitarbeiter 11', hoursWorked: 30, targetHours: 40},
    {id: 12, label: 'Mitarbeiter 12', hoursWorked: 32, targetHours: 25},
    {id: 13, label: 'Mitarbeiter 13', hoursWorked: 30, targetHours: 40},
    {id: 14, label: 'Mitarbeiter 14', hoursWorked: 35, targetHours: 40},
    {id: 15, label: 'Mitarbeiter 15', hoursWorked: 30, targetHours: 40}
  ];

  readonly days = [
    'Montag 08',
    'Dienstag 09',
    'Mittwoch 10',
    'Donnerstag 11',
    'Freitag 12',
    'Samstag 13',
    'Sonntag 14',

    'Montag 15',
    'Dienstag 16',
    'Mittwoch 17',
    'Donnerstag 18',
    'Freitag 19',
    'Samstag 20',
    'Sonntag 21'
  ];

  readonly shiftGroups = [
    {
      label: 'Frueh',
      shifts: [
        {id: 1, workers: []},
        {id: 2, workers: []},
        {id: 3, workers: []},
        {
          id: 4, workers: [
            {id: 7, label: 'Mitarbeiter 7', hoursWorked: 20, targetHours: 40},
          ]
        },
        {id: 5, workers: []},
        {id: 6, workers: []},
        {id: 7, workers: []},

        {id: 8, workers: []},
        {id: 9, workers: []},
        {id: 10, workers: []},
        {id: 11, workers: []},
        {id: 12, workers: []},
        {id: 13, workers: []},
        {id: 14, workers: []}
      ]
    },
    {
      label: 'Spaet',
      shifts: [
        {id: 15, workers: []},
        {id: 16, workers: []},
        {id: 17, workers: []},
        {id: 18, workers: []},
        {id: 19, workers: []},
        {id: 20, workers: []},
        {id: 21, workers: []},

        {id: 22, workers: []},
        {id: 23, workers: []},
        {id: 24, workers: []},
        {id: 25, workers: []},
        {id: 26, workers: []},
        {id: 27, workers: []},
        {id: 28, workers: []}
      ]
    },
    {
      label: 'Nacht',
      shifts: [
        {id: 29, workers: []},
        {id: 30, workers: []},
        {id: 31, workers: []},
        {id: 32, workers: []},
        {id: 33, workers: []},
        {id: 34, workers: []},
        {id: 35, workers: []},

        {id: 36, workers: []},
        {id: 37, workers: []},
        {id: 38, workers: []},
        {id: 39, workers: []},
        {id: 40, workers: []},
        {id: 41, workers: []},
        {id: 42, workers: []}
      ]
    }
  ];

  stationControl = new FormControl(null);

  constructor() {
  }

  ngOnInit(): void {
  }

  showDeatails(workerId: number) {
    // todo open detail drawer
  }

  dropOnShift(shift, event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer.id === 'cdk-drop-list-0') {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
