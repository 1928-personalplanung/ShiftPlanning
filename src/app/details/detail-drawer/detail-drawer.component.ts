import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AppDrawerCtrlService } from '../../app-drawer-ctrl.service';
import { Subscription, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppModalCtrlService } from '../../app-modal-ctrl.service';

@Component ( {
  selector   : 'sp-detail-drawer',
  templateUrl: './detail-drawer.component.html',
  styleUrls  : ['./detail-drawer.component.scss']
} )
export class DetailDrawerComponent implements OnInit {

  @HostBinding ( 'class.open' ) open = true;

  rate = [1,
          2,
          3
  ];

  data: any = {
    name        : 'Mitarbeiter 1',
    currentHours: 30,
    maxHours    : 40,
    rating      : 3,
    shifts      : [
      'Früh - 02.07.2019',
      'Spät - 02.07.2019',
      'Nacht - 02.07.2019'
    ],
    absence: [
      {

      }
    ]
  };

  constructor( public drawer: AppDrawerCtrlService, public modal: AppModalCtrlService ) {


  }

  close() {
    this.drawer.closeDrawer();
  }

  ngOnInit(): void {

  }

  upMe() {
    this.modal.open ( 'modalB' );
  }
}
