import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-makeupandhairstyling',
  imports: [RouterLink,CommonModule],
  templateUrl: './makeupandhairstyling.component.html',
  styleUrl: './makeupandhairstyling.component.css'
})
export class MakeupandhairstylingComponent implements OnInit {
  services: Addservice[] = [];

  constructor(private serviceApi: AddserviceService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe((data: Addservice[]) => {
      console.log('All services from backend:', data); // Add this line
      this.services = data.filter(service => service.category === 'Makeup and hairstyling');
      console.log('Filtered services:', this.services); // Add this line
    });
  }
}