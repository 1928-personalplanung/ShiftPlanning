import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDrawerCtrlService {
  showDrawer$ = new Subject<boolean> ();

  constructor( private $router: Router ) {
    this.init();
  }

  private init() {
    this.$router.events
           .pipe(
             filter( event => event instanceof ActivationEnd),
             map ( event => (event as ActivationEnd).snapshot.outlet === 'drawer' ),
             distinctUntilChanged()
           )
           .subscribe( this.showDrawer$ );
  }

  closeDrawer() {
    this.$router.navigate( [ { outlets: { drawer:  null  } } ] );
  }
}
