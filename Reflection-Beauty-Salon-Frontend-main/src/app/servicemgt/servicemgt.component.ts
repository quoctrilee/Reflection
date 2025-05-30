import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddserviceService } from '../service/addservice.service';
import { Addservice } from '../models/addservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicemgt',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './servicemgt.component.html',
  styleUrl: './servicemgt.component.css'
})
export class ServicemgtComponent implements OnInit {
  
  serarr: Addservice[] = [];  // Original service list
  filteredServices: Addservice[] = []; // Filtered service list for displaying
  searchTerm: string = ''; // Search term for filtering

  constructor(private adserv: AddserviceService) {}

  ngOnInit(): void {
    this.adserv.getAllServices().subscribe(data => {
      if (data.length > 0) {
        this.serarr = data;
        this.filteredServices = [...this.serarr]; // Initialize filtered list
      }
    });
  }

  filterServices(): void {
    this.filteredServices = this.serarr.filter(service =>
      Object.values(service).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
  delService(id:any)
  {
    this.adserv.deleteService(id).subscribe(data=>{
      alert("Service Deleted")
      this.adserv.getAllServices()
    })
  }
  upService(id:any)  
  {
    console.log("Navigating to update service with id:", id);
    window.location.href = `/updateservice/${id}`;
  }
}
