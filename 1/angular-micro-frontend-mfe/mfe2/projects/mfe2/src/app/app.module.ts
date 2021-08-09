import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe2Component } from './mfe2/mfe2.component';
import { Mfe2Module } from './mfe2childmod/mfe2/mfe2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Mfe2Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Mfe2Component]
})
export class AppModule {
  constructor() {
    console.log('MFE2 --> AppModule');

  }
}
