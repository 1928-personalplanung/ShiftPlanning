import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDrawerCtrlService {
  showDrawer$ = new BehaviorSubject<boolean> (false);

  constructor( private $router: Router ) {
    this.init();
  }

  private init() {
    this.$router.events
           .pipe(
             filter( event => event instanceof ActivationEnd),
             map ( event => (event as ActivationEnd).snapshot.outlet === 'drawer' ),
             filter ( value => value === true )
           )
           .subscribe( this.showDrawer$ );
  }

  closeDrawer() {
    this.$router.navigate( [ { outlets: { drawer:  null  } } ] );
    this.showDrawer$.next( false );
  }

  open( path: string ) {
    this.$router.navigate( [  { outlets: { drawer:  [path]  } } ] );
  }
}
