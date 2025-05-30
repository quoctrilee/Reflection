import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groomingandrelaxation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './groomingandrelaxation.component.html',
  styleUrl: './groomingandrelaxation.component.css'
})
export class GroomingandrelaxationComponent implements OnInit {
  groupedServices: { [subcategory: string]: Addservice[] } = {};

  constructor(private serviceApi: AddserviceService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe((data: Addservice[]) => {
      const filtered = data.filter(service => service.category.toLowerCase().includes('grooming'));

      this.groupedServices = filtered.reduce((acc, service) => {
        if (!acc[service.subcategory]) {
          acc[service.subcategory] = [];
        }
        acc[service.subcategory].push(service);
        return acc;
      }, {} as { [subcategory: string]: Addservice[] });

      console.log('Grouped Services:', this.groupedServices);
    });
  }
}
