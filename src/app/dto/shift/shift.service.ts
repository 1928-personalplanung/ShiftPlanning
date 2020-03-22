import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift } from './shift';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor( private http: HttpClient ) {
  }

  getListFromRange( startDate: string = '2020-03-16T00:00:00', durationDay: number = 14): Observable<Shift[]> {
    const start = new Date(startDate).getTime();
    const end = start + durationDay * 24 * 60 * 60;
    return this.http.get<Shift[]> ( `${environment.api.shift}?startDate_gte=${start}&startDate_lte=${end}` );
  }
}
