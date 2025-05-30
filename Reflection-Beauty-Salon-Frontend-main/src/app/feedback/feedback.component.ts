import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../service/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  
  fb:Feedback=new Feedback()

  constructor(private fs:FeedbackService,private router:Router)
  {

  }

  submitdata(regForm: any){
    if (!regForm.valid) {
      alert("Invalid data");
    } else {
      // Explicitly set values from the form  
      this.fb.name = regForm.value.name;  
      this.fb.email = regForm.value.email;  
      this.fb.comments = regForm.value.comments; 
      
      // Send data to the backend
      this.fs.submitFeedback(this.fb).subscribe((data) => {
        if (data != null) alert("Feedback Sent!!!");
        regForm.reset();
        this.router.navigate(['/home'])
      });
    }
  }
  
}
