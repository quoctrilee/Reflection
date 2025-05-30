import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseregisterationComponent } from '../courseregisteration/courseregisteration.component';
import { Courseregisteration } from '../models/courseregisteration';
import { CourseregisterationService } from '../service/courseregisteration.service';

@Component({
  selector: 'app-courseregisterationhistory',
  imports: [CommonModule],
  templateUrl: './courseregisterationhistory.component.html',
  styleUrl: './courseregisterationhistory.component.css'
})
export class CourseregisterationhistoryComponent implements OnInit{

  crarr:Courseregisteration[]=[]
  constructor(private crserv:CourseregisterationService)
  {

  }
  ngOnInit(): void {
   this.crserv.getAllRegisterations().subscribe(data=>{
    if(data.length>0)
      this.crarr=data
})
}
}