import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Updateservice } from '../models/updateservice';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {
serverurl="http://localhost:9000/updateservices"
  constructor(private http:HttpClient) { }

  getAllServices():Observable<Updateservice[]>
  {
    return this.http.get<Updateservice[]>(this.serverurl)
  }

  addService(service:Updateservice):Observable<Updateservice>
  {
    return this.http.post<Updateservice>(this.serverurl,service)
  }

  getServiceById(i:any):Observable<Updateservice>
  {
    return this.http.get<Updateservice>(this.serverurl+"/"+i)
  }

  deleteService(i:any):Observable<Updateservice>
  {
    return this.http.delete<Updateservice>(this.serverurl+"/"+i)
  }

  updateService(i:any,ups:Updateservice):Observable<Updateservice>
  {
    return this.http.put<Updateservice>(this.serverurl+"/"+i,ups)
  }

  getServicesByCategory():Observable<Updateservice[]>
  {
    return this.http.get<Updateservice[]>(this.serverurl)
  }

  getServiceByName():Observable<Updateservice[]>
  {
    return this.http.get<Updateservice[]>(this.serverurl)
  }
}
