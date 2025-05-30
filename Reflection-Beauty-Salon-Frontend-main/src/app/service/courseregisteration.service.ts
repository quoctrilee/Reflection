import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courseregisteration } from '../models/courseregisteration';

@Injectable({
  providedIn: 'root'
})
export class CourseregisterationService {
  serverurl="http://localhost:9000/registerations"
  constructor(private http:HttpClient) { }

  getAllRegisterations():Observable<Courseregisteration[]>
  {
    return this.http.get<Courseregisteration[]>(this.serverurl)
  }

  registerCourse(registeration:Courseregisteration):Observable<Courseregisteration>
  {
    return this.http.post<Courseregisteration>(this.serverurl,registeration)
  }

  getRegisterationById(i:any):Observable<Courseregisteration>
  {
    return this.http.get<Courseregisteration>(this.serverurl+"/"+i)
  }

  deleteRegisteration(i:any):Observable<Courseregisteration>
  {
    return this.http.delete<Courseregisteration>(this.serverurl+"/"+i)
  }
}
