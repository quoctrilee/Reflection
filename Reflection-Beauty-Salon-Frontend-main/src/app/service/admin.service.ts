import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  serverurl="http://localhost:9000/admin"
  constructor(private http:HttpClient) { }

  login(em:any,ps:any):Observable<Admin>
    {
      return this.http.get<Admin>(this.serverurl+"/"+em+"/"+ps)
    }


}
