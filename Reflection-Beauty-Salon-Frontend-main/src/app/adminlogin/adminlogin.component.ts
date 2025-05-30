import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../models/admin';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  r:Admin = new Admin()
  constructor(private rs:AdminService,private router:Router)
  {
  
  }
  
  submitdata()
  {
  this.rs.login(this.r.email,this.r.password).subscribe((data)=>
  {
    if(data!=null)
    {
      alert("Login Successful")
      localStorage.setItem("aemail",this.r.email)
      this.router.navigate(['/adminhome'])
    }
    else
    {
      alert("Invalid email or password")
    }
  })
  }
}
