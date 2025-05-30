import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  serverurl="http://localhost:9000/feedback"

  constructor(private http:HttpClient) { }

  getAllFeedback():Observable<Feedback[]>
  {
    return this.http.get<Feedback[]>("http://localhost:9000/feedbacks")
  }

  getFeedbackById(i:any):Observable<Feedback>
  {
    return this.http.get<Feedback>(this.serverurl+"/"+i)
  }

  submitFeedback(feedback:Feedback):Observable<Feedback>
  {
    return this.http.post<Feedback>(this.serverurl,feedback);
  }

  deleteFeedback(i:any):Observable<Feedback>
  {
    return this.http.delete<Feedback>(this.serverurl+"/"+i)
  }
}
