import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from './tag';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TagTypeService } from './tag-type.service';
import { skipWhile, switchMap } from 'rxjs/operators';
import { worker } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor( private http: HttpClient, private $tagType: TagTypeService ) {
  }

  getList( forWorkerId?: number ): Observable<Tag[]> {
    return this.$tagType.tagTypeMap$
               .pipe(
                 skipWhile( value => value === undefined ),
                 switchMap( tagTypeMap => {
                   return new Observable<Tag[]> ( subscriber => {
                     let url = environment.api.tag;
                     if ( !!forWorkerId ) {
                       url += `?workerId=${forWorkerId}`;
                     }
                     this.http.get<Tag[]> ( url ).subscribe(
                       tagList => {
                         tagList.map( (value, index) => {
                           value.tagType = tagTypeMap.get( value.id );
                           return value;
                         });
                         subscriber.next( tagList );
                         subscriber.complete();
                       },
                       error => subscriber.error( error ),
                       () => subscriber.complete()
                     );
                   });
                 })
               );
  }
}
