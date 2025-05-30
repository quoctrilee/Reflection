import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CourseService } from '../service/course.service';
import { count } from 'rxjs';
import { FileHandle } from '../models/file-handle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcourse',
  imports:[FormsModule,CommonModule],
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.css'
})
export class AddcourseComponent {
  course:Course=new Course();
  submitted=false;
  errordata="";

  constructor(private courseService:CourseService,private router:Router,private sanitizer:DomSanitizer)
  {
    
  }
   
  ngOnInit()
  {

  }
  newCourse():void
  {
    this.submitted=false;
    this.course=new Course();
  }

  save()
  {
    const formData=this.prepareFormData(this.course);
    this.courseService.createCourse(formData).subscribe(data=>{
      console.log(data)
      this.gotoList();

    },
   error=>{console.log(error);
    this.errordata=error;
   })

  }
  prepareFormData(course:Course):FormData
  {
    const formData=new FormData()
    formData.append(
      'course',
      new Blob([JSON.stringify(course)],{type:"application/json"})
    );
    for(var i=0;i<course.courseImages.length;i++)
    {
      formData.append(
        'imageFile',
        course.courseImages[i].file,
        course.courseImages[i].file.name
      );
    }
    return formData;
  }
  removeImage(i:number)
  {
    this.course.courseImages.splice(i,1)
  }
  onFileSelected(event:any)
  {
    if(event.target.files)
    {
      const file=event.target.files[0];
      const fileHandle:FileHandle={
        file:file,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
        name:file.name

      }
      this.course.courseImages.push(fileHandle)
    }
  }
  onSubmit()
  {
    this.save();
    this.submitted=true;
    console.log("inside on submit")
  }
  gotoList()
  {
    this.router.navigate(['/coursemgt']);
  }

  
}
