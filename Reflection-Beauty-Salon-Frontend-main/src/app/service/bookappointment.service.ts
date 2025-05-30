import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookappointment } from '../models/bookappointment';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {
  serverurl="http://localhost:9000/appointments"
  constructor(private http:HttpClient) { }

  getAllAppointments():Observable<Bookappointment[]>
  {
    return this.http.get<Bookappointment[]>(this.serverurl)
  }

  bookAppointment(appointment:Bookappointment):Observable<Bookappointment>
  {
    return this.http.post<Bookappointment>(this.serverurl,appointment)
  }

  getAppointmentById(i:any):Observable<Bookappointment>
  {
    return this.http.get<Bookappointment>(this.serverurl+"/"+i)
  }

  deleteAppointment(i:any):Observable<Bookappointment>
  {
    return this.http.delete<Bookappointment>(this.serverurl+"/"+i)
  }

  getAppointmentCount() {
    return this.http.get<number>(this.serverurl+"/count");
  }
}
