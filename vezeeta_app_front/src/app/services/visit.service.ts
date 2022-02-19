import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  constructor(private http: HttpClient, private service: ServiceService) {}

  addVisit(data: any) {
    console.log(data);
    // data.date = new Date(
    //   data.date.year,
    //   data.date.month,
    //   data.date.day
    // ).toISOString();
    data.date = '20-2-2022';
    return this.service.post('doctors/620fb171223b1498973d084e/visits', data);
  }

  getAll() {
    return this.service.getAll('doctors/620fb171223b1498973d084e/visits');
  }
}
