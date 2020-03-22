import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input, ViewContainerRef
} from '@angular/core';
import { WorkerInfoTooltipComponent } from './worker-info-tooltip.component';

@Directive ( {
  selector: '[spWorkerInfoTooltip]'
} )
export class WorkerInfoTooltipDirective {

  private _tooltip: ComponentRef<WorkerInfoTooltipComponent>;
  private _factory: ComponentFactory<WorkerInfoTooltipComponent>;
  private _instance: WorkerInfoTooltipComponent;
  private _destroyer;


  @Input() numValue;
  @Input() maxValue;
  @Input() toolLabel;

  constructor( private compFactRes: ComponentFactoryResolver,
               private inj: Injector,
               private viewRef: ViewContainerRef,
               private el: ElementRef ) {
    this._factory = this.compFactRes.resolveComponentFactory ( WorkerInfoTooltipComponent );
    this._factory.create ( this.inj );
  }

  @HostListener ( 'mouseenter', ['$event'] )
  onMouseIn( event ) {

    if ( !!this._tooltip ) {
      this._tooltip.destroy ();
      clearTimeout ( this._destroyer );
    }

    this._tooltip  = this.viewRef.createComponent ( this._factory, 0 );
    this._instance = this._tooltip.instance;

    this._instance.text = this.toolLabel;
    this._instance.numVal = this.numValue;
    this._instance.maxVal = this.maxValue;
    this._instance.x    = event.clientX - event.offsetX ;
    this._instance.y    = event.clientY - event.offsetY + (this.el.nativeElement.clientHeight * .5);
    // console.log ( event );
  }

  @HostListener ( 'mouseout', ['$event'] )
  @HostListener ( 'mouseleave', ['$event'] )
  @HostListener ( 'mousedown', ['$event'] )
  onMouseOut( event ) {

    this._instance.opacity = 0;
    this._destroyer        = setTimeout ( () => {
      this._tooltip.destroy ();
    }, 500 );
  }

}
