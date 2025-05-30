import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Addservice } from '../models/addservice';
import { AddserviceService } from '../service/addservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addservice',
  imports: [FormsModule,CommonModule],
  templateUrl: './addservice.component.html',
  styleUrl: './addservice.component.css'
})
export class AddserviceComponent {
  service:Addservice=new Addservice()
  categories = [
    { 
      name: "Makeup and hairstyling", 
      subcategories: [] 
    },
    { 
      name: "Haircutting and Maintenance", 
      subcategories: ["Haircutting", "Maintenance"] 
    },
    { 
      name: "Grooming and Relaxing", 
      subcategories: ["Waxing", "Bleaching", "Threading"] 
    },
    { 
      name: "Clothing rental", 
      subcategories: [] 
    }
  ];
  
  subcategories: string[] = [];

  constructor(private adserv:AddserviceService, private router:Router)
  {

  }
  
  onCategoryChange() {
    const selectedCategory = this.categories.find(cat => cat.name === this.service.category);
    this.subcategories = selectedCategory ? selectedCategory.subcategories : [];
    this.service.subcategory = ""; // Reset subcategory when category changes
  }

  submitdata()
  {
    this.adserv.addservice(this.service).subscribe((data)=>{
      if(data!=null)
        alert("New Service added");
      this.service = new Addservice(); 
      this.service = new Addservice(); 
      this.subcategories = []; // Reset subcategories after form submission
      this.router.navigate(["/servicemgt"])
    })
  }
  
}
