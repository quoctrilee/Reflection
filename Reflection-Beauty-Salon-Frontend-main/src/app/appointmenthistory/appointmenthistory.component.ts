import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookappointmentService } from '../service/bookappointment.service';
import { Bookappointment } from '../models/bookappointment';

@Component({
  selector: 'app-appointmenthistory',
  imports: [CommonModule],
  templateUrl: './appointmenthistory.component.html',
  styleUrl: './appointmenthistory.component.css'
})
export class AppointmenthistoryComponent implements OnInit{

  brarr:Bookappointment[]=[]
  constructor(private brserv:BookappointmentService)
  {

  }
  ngOnInit(): void {
   this.brserv.getAllAppointments().subscribe(data=>{
    if(data.length>0)
      this.brarr=data
})
}
}