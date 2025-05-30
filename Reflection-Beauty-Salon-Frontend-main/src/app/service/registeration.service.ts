import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registeration } from '../models/registeration';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
serverurl="http://localhost:9000/registeration"
  constructor(private http:HttpClient) { }

  getAll():Observable<Registeration[]>
  {
    return this.http.get<Registeration[]>(this.serverurl)
  }

  register(r:Registeration):Observable<Registeration>
  {
    return this.http.post<Registeration>(this.serverurl,r)
  }

  search(i:any):Observable<Registeration>
  {
    return this.http.get<Registeration>(this.serverurl+"/"+i)
  }

  del(i:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/"+i)
  }

  update(i:any,r:Registeration):Observable<Registeration>
  {
    return this.http.put<Registeration>(this.serverurl+"/"+i,r)
  }

  login(em:any,ps:any):Observable<Registeration[]>
  {
    return this.http.get<Registeration[]>(this.serverurl+"/"+em+"/"+ps)
  }

  getCount() {
    return this.http.get<number>(this.serverurl+"/count");
  }
}
