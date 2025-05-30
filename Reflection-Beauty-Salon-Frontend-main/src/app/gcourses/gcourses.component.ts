import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course';
import { CourseService } from '../service/course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gcourses',
  imports: [CommonModule],
  templateUrl: './gcourses.component.html',
  styleUrl: './gcourses.component.css'
})
export class GcoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log("Courses fetched:", this.courses);
      },
      (error: HttpErrorResponse) => {
        console.error("Error fetching courses:", error);
      }
    );
  }

  getCourseImage(courseName: string): string {
    const courseImages: { [key: string]: string } = {
      'Makeup': './assets/images/makeupcourse.jpg',
      'Hair Treatment': './assets/images/haircourse.jpg',
      'Hair Accessories making': './assets/images/hairr.png',
      'Rangoli': './assets/images/rangolicourse.jpg',
      'Nail Art': './assets/images/nailartcourse.jpg',
      'Artificial Flowers making': './assets/images/flowercourse.jpg'
    };
    return courseImages[courseName] || './assets/images/default-course.jpg';
  }
}
