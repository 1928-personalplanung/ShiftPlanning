import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Station } from './station';
import { WorkerService } from '../worker/worker.service';
import { Worker } from '../worker/worker';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor( private $http: HttpClient,
               private $worker: WorkerService ) {
  }

  getList(): Observable<Station[]> {
    return this.$http.get<Station[]> ( environment.api.station );
  }

  getWorker(): Observable<Worker[]> {
    return this.$worker.getList();
  }

}
