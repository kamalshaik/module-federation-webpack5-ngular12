import { Input } from '@angular/core';
import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  //kamal
  // @Input()
  // dataFromShell;



  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  search(): void {
    alert('Not implemented for this demo!');
    //  console.log("Data from parent : " + this.dataFromShell);

  }

  terms(): void {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }


}
