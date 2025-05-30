import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../service/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coursemgt',
  imports: [RouterModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './coursemgt.component.html',
  styleUrl: './coursemgt.component.css'
})
export class CoursemgtComponent implements OnInit {
  
  crarr: Course[] = [];  // Original service list
  filteredServices: Course[] = []; // Filtered service list for displaying
  searchTerm: string = ''; // Search term for filtering

  constructor(private adcr: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
    this.adcr.getAll().subscribe(data => {
      if (data.length > 0) {
        this.crarr = data;
        this.filteredServices = [...this.crarr]; // Initialize filtered list
      }
    });
  }
  fetchCourses() {
    this.adcr.getAll().subscribe(data => {
      this.crarr = data;
      this.filteredServices = [...this.crarr];
    });
  }

  filterServices(): void {
    this.filteredServices = this.crarr.filter(coursename =>
      Object.values(coursename).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  delcourse(id: any): void {
    this.adcr.deletecourse(id).subscribe(() => {
      alert("Course Deleted successfully!");
      this.fetchCourses(); // Re-fetch the list
    });
  }
}
