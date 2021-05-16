import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  url = '../../assets/calendar-input.json'
  constructor(private http: HttpClient) { }

  getCalenderData() :Observable<any> {
    return this.http.get<any>(this.url);
  }
}
