import { Injectable } from '@angular/core';
import { DOCTORS } from './mock-doctors';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAll(url: string) {
    return this.http.get(`${environment.base_url}/${url}`);
  }

  post(url: String, data: object) {
    return this.http.post(`${environment.base_url}/${url}`, data);
  }

  getDoctorDetailsByID(pageId: any) {
    return DOCTORS.filter((item) => pageId == item.id);
  }

  // Delete item
  deleteDoctor(id: any) {
    return this.http.delete(`${environment.base_url}doctors/${id}`);
  }
}
