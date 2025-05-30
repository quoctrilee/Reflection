import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../service/registeration.service';
import { AddserviceService } from '../service/addservice.service';
import { CourseService } from '../service/course.service';
import { BookappointmentService } from '../service/bookappointment.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  totalRegistrations: number = 0;
  totalServices: number = 0;
  totalCourses: number = 0;
  totalAppointments: number = 0;

  constructor(
    private regService: RegisterationService,
    private serviceService: AddserviceService,
    private courseService: CourseService,
    private bookappointmentService: BookappointmentService
  ) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {
    this.regService.getCount().subscribe(count => {
      this.totalRegistrations = count;
    });

    this.serviceService.getCount().subscribe(count => {
      this.totalServices = count;
    });

    this.courseService.getCourseCount().subscribe(count => {
      this.totalCourses = count;
    });

    this.bookappointmentService.getAppointmentCount().subscribe(count => {
      this.totalAppointments = count;
    });
  }
}
