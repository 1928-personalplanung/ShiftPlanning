import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, merge, Observable, of } from 'rxjs';
import { Worker } from './worker';
import { environment } from '../../../environments/environment';
import { mergeAll, switchMap, tap } from 'rxjs/operators';
import { TagService } from '../tag/tag.service';

@Injectable ( {
  providedIn: 'root'
} )
export class WorkerService {

  constructor( private http: HttpClient, private $tag: TagService ) {
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
                     this.$tag.getList ( workerResponse.id )
                         .subscribe (
                           tags => {
                             workerResponse.tags = tags;
                             subscriber.next ( workerResponse );
                             subscriber.complete();
                           },
                           error => subscriber.error ( error ),
                           () => subscriber.complete ()
                         );
                   } );
                 } )
               );
  }
}
