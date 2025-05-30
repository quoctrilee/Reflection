import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Registeration } from '../models/registeration';
import { RegisterationService } from '../service/registeration.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
r:Registeration=new Registeration()

constructor(private rs:RegisterationService,private router:Router)
{

}

submitdata(regForm: any) {
  if (!regForm.valid) {
    alert("Invalid data");
  } else {
    // Explicitly set values from the form
    this.r.name = regForm.value.name;  
    this.r.dateofbirth = regForm.value.dob; 
    this.r.email = regForm.value.email;  
    this.r.phone = regForm.value.phn;  
    this.r.address = regForm.value.address; 
    this.r.password = regForm.value.password;  // <-- Add this line
 
    
    // Send data to the backend
    this.rs.register(this.r).subscribe((data) => {
      if (data != null) alert("Registration Successful");
      regForm.reset();
      this.router.navigate(['/'])
    });
  }
}

}
