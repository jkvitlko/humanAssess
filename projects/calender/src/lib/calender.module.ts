import { NgModule } from '@angular/core';
import { CalenderComponent } from './calender.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
  ],
  exports: [CalenderComponent]
})
export class CalenderModule { }
