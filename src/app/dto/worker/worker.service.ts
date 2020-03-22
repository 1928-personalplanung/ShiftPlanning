import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { Worker } from './worker';
import { environment } from '../../../environments/environment';
import { first, skipWhile, switchMap } from 'rxjs/operators';
import { TagService } from '../tag/tag.service';
import { WorkMode } from './work-mode';

@Injectable ( {
  providedIn: 'root'
} )
export class WorkerService {

  workModeMap$ = new BehaviorSubject<Map<number, WorkMode> | undefined> ( undefined );

  constructor( private http: HttpClient, private $tag: TagService ) {
    this.getWorkModes ()
        .subscribe (
          workModes => {
            const workModeMap = new Map<number, WorkMode>();
            workModes.forEach( (value, index) => workModeMap.set( index, value ));
            this.workModeMap$.next( workModeMap);
          }
        );
  }

  getList(): Observable<Worker[]> {
    return this.http.get<Worker[]> ( environment.api.worker )
               .pipe (
                 switchMap ( workers => {
                   const observerlist = workers.map ( value => this.getByID ( value.id ) );
                   return forkJoin ( observerlist );
                 } )
               );
  }

  getByID( id: number ): Observable<Worker> {
    return this.http.get<Worker> ( environment.api.worker + id )
               .pipe (
                 switchMap ( workerResponse => {
                   return new Observable<Worker> ( subscriber => {
                     forkJoin(
                       [
                         this.workModeMap$.pipe( skipWhile( value => value === undefined), first() ),
                         this.$tag.getList ( workerResponse.id )
                       ]
                     ).subscribe(
                       ([workModeMap, tags]) => {
                             workerResponse.tags = tags;
                             workerResponse.workMode = workModeMap.get( workerResponse.id );
                             subscriber.next ( workerResponse );
                             subscriber.complete ();
                       },
                       error => subscriber.error ( error ),
                       () => subscriber.complete ()
                     );
                     // this.$tag.getList ( workerResponse.id )
                     //     .subscribe (
                     //       tags => {
                     //         workerResponse.tags = tags;
                     //         subscriber.next ( workerResponse );
                     //         subscriber.complete ();
                     //       },
                     //       error => subscriber.error ( error ),
                     //       () => subscriber.complete ()
                     //     );
                   } );
                 } )
               );
  }

  getWorkModes(): Observable<WorkMode[]> {
    return this.http.get<WorkMode[]> ( environment.api.workmode );
  }

}
