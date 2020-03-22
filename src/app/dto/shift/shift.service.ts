import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift } from './shift';
import { environment } from '../../../environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { WorkerService } from '../worker/worker.service';
import { Worker } from '../worker/worker';

@Injectable ( {
  providedIn: 'root'
} )
export class ShiftService {

  constructor( private http: HttpClient, private $worker: WorkerService ) {
  }

  getListFromRange( startDate: string = '2020-03-16T00:00:00', durationDay: number = 14 ): Observable<Shift[]> {
    const start = Math.floor ( new Date ( startDate ).getTime () / 1000 );
    const end   = start + durationDay * 24 * 60 * 60;
    return this.http.get<Shift[]> ( `${environment.api.shift}?startDate_gte=${start}&startDate_lte=${end}` )
               .pipe (
                 switchMap ( shifts => {

                   return new Observable<Shift[]> ( subscriber => {
                     this.$worker.getList()
                     .pipe(
                       map ( workers => {
                         const workerMap = new Map<number, Worker>();
                         workers.forEach( (value, index) => workerMap.set( index, value ));
                         return workerMap;
                       })
                     )
                     .subscribe(
                       workerMap =>  {
                         shifts.map ( shift => {
                           shift.workers = shift.forLocalMockWorkerIDs
                                                .map( id => workerMap.get( id ) );
                         } );
                         subscriber.next( shifts );
                       },
                       error => subscriber.error( error ),
                       () => subscriber.complete()
                     );

                   } );
                 } )
               );
  }
}
