import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addservice } from '../models/addservice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  
serverurl="http://localhost:9000/services"

  constructor(private http:HttpClient) { }

  getAllServices():Observable<Addservice[]>
  {
    return this.http.get<Addservice[]>(this.serverurl)
  }
  
  addservice(service:Addservice):Observable<Addservice>
  {
    return this.http.post<Addservice>(this.serverurl,service)
  }

  updateService(i:any,ups:Addservice):Observable<Addservice>
    {
      return this.http.put<Addservice>(this.serverurl+"/"+i,ups)
    }
  
  getServiceById(i:any):Observable<Addservice>
  {
    return this.http.get<Addservice>(this.serverurl+"/"+i)
  }

  deleteService(i:any):Observable<Addservice>
  {
    return this.http.delete<Addservice>(this.serverurl+"/"+i)
  }

  getServicesByCategory(category:any):Observable<Addservice[]>
  {
    return this.http.get<Addservice[]>(this.serverurl+"/"+category)
  }

  getServiceByName(service:any):Observable<Addservice[]>
  {
    return this.http.get<Addservice[]>(this.serverurl+"/"+service)
  }

  getCount() {
    return this.http.get<number>(this.serverurl+"/count");
  }
}
