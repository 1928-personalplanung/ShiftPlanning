import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppModalCtrlService {
  showModal$ = new BehaviorSubject<boolean> ( false );

  constructor( private $router: Router ) {
    this.init();
  }

  private init() {
    this.$router.events
        .pipe(
          filter( event => event instanceof ActivationEnd),
          map ( event => (event as ActivationEnd).snapshot.outlet === 'modal' ),
          filter ( value => value === true ),
        )
        .subscribe( this.showModal$ );
  }

  closeModal() {
    this.$router.navigate( [ { outlets: { modal:  null  } } ] );
    this.showModal$.next( false );
  }

  open( path: string ) {
    this.$router.navigate( [  { outlets: { modal:  [path]  } } ] );
  }
}
