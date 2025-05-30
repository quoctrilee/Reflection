import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bookappointment } from '../models/bookappointment';
import { BookappointmentService } from '../service/bookappointment.service';
import { Router } from '@angular/router';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';

@Component({
  selector: 'app-bookappointment',
  imports: [FormsModule,CommonModule],
  templateUrl: './bookappointment.component.html',
  styleUrl: './bookappointment.component.css'
})
export class BookappointmentComponent implements OnInit {
  ba: Bookappointment = new Bookappointment();
  services: Addservice[] = [];
  servicesByCategory: { [key: string]: Addservice[] } = {};

  constructor(
    private bkapt: BookappointmentService,
    private router: Router,
    private serviceApi: AddserviceService
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceApi.getAllServices().subscribe((data: Addservice[]) => {
      this.services = data;
      // Phân loại services theo category
      this.servicesByCategory = this.services.reduce((acc, service) => {
        if (!acc[service.category]) {
          acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
      }, {} as { [key: string]: Addservice[] });
    });
  }

  submitdata(regForm: any) {
    if (!regForm.valid) {
      alert("Invalid data");
    } else {
      this.ba.name = regForm.value.name;  
      this.ba.email = regForm.value.email;  
      this.ba.phone = regForm.value.phn;  
      this.ba.date = regForm.value.date; 
      this.ba.service = regForm.value.service; 

      this.bkapt.bookAppointment(this.ba).subscribe((data) => {
        if (data != null) alert("Appointment Booked Successful");
        regForm.reset();
        this.router.navigate(['/home'])
      });
    }
  }
}
