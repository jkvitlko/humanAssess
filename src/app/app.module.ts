import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CalenderModule } from "calender";
import { CalenderCompComponent } from './components/calender-comp/calender-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
