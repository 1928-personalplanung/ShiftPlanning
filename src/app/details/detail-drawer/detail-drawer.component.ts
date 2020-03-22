import { Component, HostBinding, OnInit } from '@angular/core';
import { AppDrawerCtrlService } from '../../app-drawer-ctrl.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppModalCtrlService } from '../../app-modal-ctrl.service';
import { WorkerService } from '../../dto/worker/worker.service';
import { Worker } from '../../dto/worker/worker';
import { share, tap } from 'rxjs/operators';

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
    absence     : [
      {}
    ]
  };

  worker: Observable<Worker>;

  constructor( public drawer: AppDrawerCtrlService,
               private workers: WorkerService,
               private actR: ActivatedRoute,
               public modal: AppModalCtrlService ) {

    this.worker = this.workers.getByID ( parseInt ( this.actR.snapshot.paramMap.get ( 'id' ), 10 ) )
                      .pipe (
                        tap ( value => {
                          console.log ( value );
                        } ),
                      share ()
                    );
  }

  close() {
    this.drawer.closeDrawer ();
  }

  ngOnInit(): void {

  }

}
