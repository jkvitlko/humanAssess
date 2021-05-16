import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-comp',
  templateUrl: './calender-comp.component.html',
  styleUrls: ['./calender-comp.component.scss']
})
export class CalenderCompComponent implements OnInit {
  calenderData = [];
  date = new Date();
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  month: string;
  day: string
  days = [];
  lastDay: number;
  prevDays = [];
  firstDayInd: number;
  lastDayInd: number
  prevMonthLastDay: number;
  nextDays: number;
  nextMonthDays = [];
  selectedDateSlots = [];
  constructor() { }

  ngOnInit() {
    console.log(this.calenderData);
    this.createCalender();

  }

  getDays() {
    this.days = [];
    for (let i = 1; i <= this.lastDay; i++) {
      if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
        this.days.push({ 'day': i, 'today': true, 'enable': false })
      } else {
        this.days.push({ 'day': i, 'today': false, 'enable': false })
      }
    }
  }
  getPreviousMonthDays() {
    this.prevDays = [];
    for (let i = this.firstDayInd; i > 0; i--) {
      this.prevDays.push(this.prevMonthLastDay - i + 1);
    }
  }
  getNextMonthDays() {
    this.nextMonthDays = [];
    for (let i = 1; i <= this.nextDays; i++) {
      this.nextMonthDays.push(i);
    }
  }

  mapData() {
    for (let i = 1; i < this.days.length; i++) {
      this.calenderData.forEach(res => {
        let tempData = res.date.split('-');
        if (tempData[0] === this.days[i].day && tempData[1] === this.month && tempData[2] === this.date.getFullYear()) {
          this.days[i].enable = true;
        }
      });
    }
    console.log(this.days);
  }
  selectDate(day, month) {
    let year = this.date.getFullYear();
    let selectedDate = day.day > 10 ? `${day.day}-${month}-${year}` : `0${day.day}-${month}-${year}`
    let data = this.calenderData.filter(res => res.date === selectedDate);
    this.selectedDateSlots = data.length > 0 ? data[0].timeSlots : [];
    console.log(this.selectedDateSlots);
  }
  prevMonth() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.createCalender();

  }
  nextMonth() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.createCalender();
  }

  createCalender() {
    this.month = this.months[this.date.getMonth()];
    this.date.setDate(1);
    this.day = new Date().toDateString();
    this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    this.firstDayInd = this.date.getDay();
    this.lastDayInd = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay()
    this.prevMonthLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    this.nextDays = 7 - this.lastDayInd - 1;
    this.getDays();
    this.getPreviousMonthDays();
    this.getNextMonthDays();
  }
}