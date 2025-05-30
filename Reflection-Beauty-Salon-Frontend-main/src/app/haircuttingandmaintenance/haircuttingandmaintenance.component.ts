import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-haircuttingandmaintenance',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './haircuttingandmaintenance.component.html',
  styleUrl: './haircuttingandmaintenance.component.css'
})
export class HaircuttingandmaintenanceComponent implements OnInit {
  groupedServices: { [subcategory: string]: Addservice[] } = {};

  constructor(private serviceApi: AddserviceService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe((data: Addservice[]) => {
      const filtered = data.filter(service => service.category === 'Haircutting and Maintenance');

      // Group services by subcategory
      this.groupedServices = filtered.reduce((acc, service) => {
        if (!acc[service.subcategory]) {
          acc[service.subcategory] = [];
        }
        acc[service.subcategory].push(service);
        return acc;
      }, {} as { [subcategory: string]: Addservice[] });

      console.log('Grouped services:', this.groupedServices);
    });
  }
}
