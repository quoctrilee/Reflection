import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  usertype="guest"
  constructor(private router:Router)
  {
    
  }
  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      if(localStorage.getItem("email")!=null)
        {
          this.usertype="user"
        }
        else if(localStorage.getItem("aemail")!=null)
        {
          this.usertype="admin"
        }
        else
        {
          this.usertype="guest"
        }
    })
    
  }
  ulogout()
  {
    localStorage.removeItem("email")
    this.router.navigate(["/"])
  }
  alogout()
  {
    localStorage.removeItem("aemail")
    this.router.navigate(["/"])
  }

}
