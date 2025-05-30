import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl='http://localhost:9000/project/courses';

  constructor(private http:HttpClient) { }

  createCourse(course:FormData):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`,course);
  }
  getAll()
  {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
  deletecourse(courseid:number)
  {
    return this.http.delete(`${this.baseUrl}`+"/"+courseid);
  }
  getCourseCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}`+"/count");
  }
}


