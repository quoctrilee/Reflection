import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { Feedback } from '../models/feedback';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewfeedback',
  imports: [CommonModule],
  templateUrl: './viewfeedback.component.html',
  styleUrl: './viewfeedback.component.css'
})
export class ViewfeedbackComponent implements OnInit{

  farr:Feedback[]=[]

  constructor(private fserv:FeedbackService)
  {

  }
  ngOnInit(): void {
   this.fserv.getAllFeedback().subscribe(data=>{
    if(data.length>0)
      this.farr=data
   })
  }

}
