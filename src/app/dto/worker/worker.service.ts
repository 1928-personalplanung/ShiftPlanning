import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Worker } from './worker';
import { environment } from '../../../environments/environment';
import { switchMap, tap } from 'rxjs/operators';
import { TagService } from '../tag/tag.service';

@Injectable ( {
  providedIn: 'root'
} )
export class WorkerService {

  constructor( private http: HttpClient, private $tag: TagService ) {
  }

  getList(): Observable<Worker[]> {
    return this.http.get<Worker[]> ( environment.api.worker )
               // .pipe (
               //   switchMap ( workers => {
               //     return forkJoin ( workers.map ( value => value.id )
               //                       .map ( id => this.getByID ( id ) ) ).pipe(
               //                         tap( n => console.log( n ))
               //     );
               //   } )
               // );
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
                           },
                           error => subscriber.error ( error ),
                           () => subscriber.complete ()
                         );
                   } );
                 } )
               );
  }
}
