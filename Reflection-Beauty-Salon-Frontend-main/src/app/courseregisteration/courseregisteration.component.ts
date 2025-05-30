import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courseregisteration } from '../models/courseregisteration';
import { CourseregisterationService } from '../service/courseregisteration.service';
import { Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-courseregisteration',
  imports: [FormsModule,CommonModule],
  templateUrl: './courseregisteration.component.html',
  styleUrl: './courseregisteration.component.css'
})
export class CourseregisterationComponent implements OnInit {
  cr: Courseregisteration = new Courseregisteration();
  courses: Course[] = [];

  constructor(
    private creg: CourseregisterationService,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe((data: Course[]) => {
      this.courses = data;
      console.log('Loaded courses:', this.courses);
    });
  }

  submitdata(regForm: any) {
    if (!regForm.valid) {
      alert("Invalid data");
    } else {
      this.cr.name = regForm.value.name;  
      this.cr.email = regForm.value.email;  
      this.cr.phone = regForm.value.phn;  
      this.cr.course = regForm.value.course; 
      this.cr.batch = regForm.value.batch; 

      this.creg.registerCourse(this.cr).subscribe((data) => {
        if (data != null) alert("Registered for Course Successfully");
        regForm.reset();
        this.router.navigate(['/home'])
      });
    }
  }
}
