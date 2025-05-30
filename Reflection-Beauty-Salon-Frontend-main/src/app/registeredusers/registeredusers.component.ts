import { Component, OnInit } from '@angular/core';
import { Registeration } from '../models/registeration';
import { RegisterationService } from '../service/registeration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registeredusers',
  imports: [CommonModule],
  templateUrl: './registeredusers.component.html',
  styleUrl: './registeredusers.component.css'
})
export class RegisteredusersComponent implements OnInit{

  rarr:Registeration[]=[]
  constructor(private rserv:RegisterationService)
  {

  }
  ngOnInit(): void {
   this.rserv.getAll().subscribe(data=>{
    if(data.length>0)
      this.rarr=data
})
}
}