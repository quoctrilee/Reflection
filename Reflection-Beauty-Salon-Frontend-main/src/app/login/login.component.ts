import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Registeration } from '../models/registeration';
import { FormsModule } from '@angular/forms';
import { RegisterationService } from '../service/registeration.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
r:Registeration = new Registeration()
constructor(private rs:RegisterationService,private router:Router)
{

}

submitdata()
{
this.rs.login(this.r.email,this.r.password).subscribe((data)=>
{
  if(data.length>0)
  {
    alert("Login Successful")
    localStorage.setItem("email",this.r.email)
    this.router.navigate(['/home'])
  }
  else
  {
    alert("Invalid email or password")
  }
})
}

}
