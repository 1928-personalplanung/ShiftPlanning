import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { TagType } from './tag-type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagTypeService {

  tagTypeMap$ = new BehaviorSubject<Map<number, TagType>|undefined>( undefined );

  constructor( private http: HttpClient ) {
    this.getList()
        .pipe(
          map( tygTypes => {
            const tagTypeMap: Map<number, TagType> = new Map<number, TagType>();
            tygTypes.forEach( value => tagTypeMap.set( value.id, value ) );
            return tagTypeMap;
          })
        )
        .subscribe( n => this.tagTypeMap$.next( n ) );
  }

  getList(): Observable<TagType[]> {
    return this.http.get<TagType[]> ( environment.api.tagtypes );
  }
}
