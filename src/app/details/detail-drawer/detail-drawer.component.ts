import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { AppDrawerCtrlService } from '../../app-drawer-ctrl.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppModalCtrlService } from '../../app-modal-ctrl.service';
import { WorkerService } from '../../dto/worker/worker.service';
import { Worker } from '../../dto/worker/worker';
import { share, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { TagTypes } from '../../dto/tag/tag-types.enum';

@Component ( {
  selector   : 'sp-detail-drawer',
  templateUrl: './detail-drawer.component.html',
  styleUrls  : ['./detail-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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


  ratingStyle;


  TagTypes = TagTypes;
  constructor( public drawer: AppDrawerCtrlService,
               private workers: WorkerService,
               private actR: ActivatedRoute,
               private san: DomSanitizer,
               public modal: AppModalCtrlService ) {

    this.worker = this.workers.getByID ( parseInt ( this.actR.snapshot.paramMap.get ( 'id' ), 10 ) )
                      .pipe (
                        tap ( value => {
                          const p = value.score;//Math.round(value.hoursWorkedInCurrentMonth / value.workMode.hoursPerMonth * 100);
                          this.ratingStyle = this.san.bypassSecurityTrustStyle('polygon(0 0, ' + p + '% 0%, ' + p + '% 100%, 0% 100%)');
                          console.log ( value );
                        } ),
                      share ()
                    );
  }

  close() {
    this.drawer.closeDrawer ();
  }


  getDate(timestamp){
    console.log(new Date(timestamp * 1000))
    return new Date(timestamp * 1000)
  }
  ngOnInit(): void {

  }

}
