import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../dto/station/station';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StationService } from '../dto/station/station.service';
import { WorkerService } from '../dto/worker/worker.service';

@Injectable ( {
  providedIn: 'root'
} )
export class PlannerService {

  constructor( private $http: HttpClient,
               private $statation: StationService,
               private $worker: WorkerService
  ) {
  }


}
