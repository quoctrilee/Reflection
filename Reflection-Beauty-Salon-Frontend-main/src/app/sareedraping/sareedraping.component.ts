import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sareedraping',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sareedraping.component.html',
  styleUrl: './sareedraping.component.css'
})
export class SareedrapingComponent implements OnInit {
  services: Addservice[] = [];

  constructor(private serviceApi: AddserviceService) {}

  ngOnInit(): void {
    this.serviceApi.getAllServices().subscribe((data: Addservice[]) => {
      console.log('All services from backend:', data);
      this.services = data.filter(service => service.category === 'Clothing rental');
      console.log('Filtered Clothing rental services:', this.services);
    });
  }
}
