import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolLibModule } from '../../projects/sol-lib/src/lib/sol-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SolLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
