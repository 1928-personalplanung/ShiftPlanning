import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from './worker';
import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { worker } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor( private http: HttpClient ) {
  }

  getList(): Observable<Worker[]> {
    return this.http.get<Worker[]> ( environment.api.worker );
  }

  getByID( id: number ): Observable<Worker> {
    return this.http.get<Worker> ( environment.api.worker + id )
      .pipe(
        // switchMap( worker => {
        //   return new Observable<Worker>( subscriber => {
        //   });
        // })
      );
  }
}
