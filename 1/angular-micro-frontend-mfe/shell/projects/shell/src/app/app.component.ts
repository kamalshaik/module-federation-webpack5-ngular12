import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  testTransferObj = { id: 46095911, name: 'kamal', from: 'shell project' };

  constructor() {
    // document.body.myData= { id: 46095911, name: 'kamal', from: 'shell project' };
  }

}

