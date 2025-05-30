import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Addservice } from '../models/addservice'; // ✅ same model as servicemgt
import { AddserviceService } from '../service/addservice.service'; // ✅ same service
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateservice',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './updateservice.component.html',
  styleUrl: './updateservice.component.css'
})
export class UpdateserviceComponent implements OnInit {
  ups: Addservice = new Addservice();
  categories = [
    { name: "Makeup and hairstyling", subcategories: [] },
    { name: "Haircutting and Maintenance", subcategories: ["Haircutting", "Maintenance"] },
    { name: "Grooming and Relaxing", subcategories: ["Waxing", "Bleaching", "Threading"] },
    { name: "Saree Draping", subcategories: [] }
  ];
  
  subcategories: string[] = [];
  
  onCategoryChange() {
    const selectedCategory = this.categories.find(cat => cat.name === this.ups.category);
    this.subcategories = selectedCategory ? selectedCategory.subcategories : [];
    this.ups.subcategory = ""; // Reset subcategory when category changes
  }
  id: any;

  constructor(
    private us: AddserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.us.getServiceById(this.id).subscribe((data) => {
      if (data) {
        this.ups = data;
        console.log("Loaded for update:", this.ups);
      }
    });
  }

  submitdata() {
    this.us.updateService(this.id, this.ups).subscribe(() => {
      alert("Service updated successfully!");
      this.router.navigate(['/servicemgt']);
    });
  }
}
