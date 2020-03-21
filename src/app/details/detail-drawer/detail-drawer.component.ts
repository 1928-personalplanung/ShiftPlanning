import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AppDrawerCtrlService } from '../../app-drawer-ctrl.service';
import { Subscription, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component ( {
  selector   : 'sp-detail-drawer',
  templateUrl: './detail-drawer.component.html',
  styleUrls  : ['./detail-drawer.component.scss']
} )
export class DetailDrawerComponent implements OnInit, OnDestroy {

  @HostBinding ( 'class.open' ) open = false;

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
    ]
  };

  private sub: Subscription;

  constructor( public drawer: AppDrawerCtrlService ) {

    this.sub = this.drawer.showDrawer$

                   .pipe ( delay ( 100 ) )
                   .subscribe ( ( value ) => {
                     console.log ( value );
                     this.open = value;

                   } );
  }

  close() {

    this.open = false;
    timer ( 1000 )
      .subscribe ( () => this.drawer.closeDrawer () );
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe ();
  }

}
