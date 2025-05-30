import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Course } from '../models/course';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseService } from '../service/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  login = false;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.login = localStorage.getItem("emailid") !== null;
  }

  getAllCourses(): void {
    this.courseService.getAll().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log("Courses fetched:", this.courses); // This logs the fetched courses
      },
      (error: HttpErrorResponse) => {
        console.error("Error fetching courses:", error);
      }
    );
  }

  enroll(id: number): void {
    this.router.navigate(["enroll", id]);
  }
}
