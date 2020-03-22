import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sp-worker-info-tooltip',
  templateUrl: './worker-info-tooltip.component.html',
  styleUrls: ['./worker-info-tooltip.component.scss']
})
export class WorkerInfoTooltipComponent implements AfterViewInit {

  text = '';

  numVal = undefined;
  maxVal = undefined;


  @HostBinding ( 'style.left.px' ) x           = 0;
  @HostBinding ( 'style.top.px' ) y            = 0;
  @HostBinding ( 'class.toolLeft' ) isleft     = false;
  @HostBinding ( 'class.toolBottom' ) isbottom = true;

  @HostBinding ( 'style.opacity' ) opacity = 0;

  constructor () {
  }

  ngAfterViewInit (): void {
    setTimeout ( () => {
      this.opacity = 1;
    } );
  }

}
