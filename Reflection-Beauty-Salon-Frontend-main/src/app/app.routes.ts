import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ClienthistoryComponent } from './clienthistory/clienthistory.component';
import { ContactComponent } from './contact/contact.component';
import { CoursemgtComponent } from './coursemgt/coursemgt.component';
import { CourseregisterationComponent } from './courseregisteration/courseregisteration.component';
import { CoursesComponent } from './courses/courses.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GroomingandrelaxationComponent } from './groomingandrelaxation/groomingandrelaxation.component';
import { HaircuttingandmaintenanceComponent } from './haircuttingandmaintenance/haircuttingandmaintenance.component';
import { LoginComponent } from './login/login.component';
import { MakeupandhairstylingComponent } from './makeupandhairstyling/makeupandhairstyling.component';
import { RegisterComponent } from './register/register.component';
import { SareedrapingComponent } from './sareedraping/sareedraping.component';
import { ServicemgtComponent } from './servicemgt/servicemgt.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { ServicesComponent } from './services/services.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { GhomeComponent } from './ghome/ghome.component';
import { GaboutusComponent } from './gaboutus/gaboutus.component';
import { GgalleryComponent } from './ggallery/ggallery.component';
import { GservicesComponent } from './gservices/gservices.component';
import { GcoursesComponent } from './gcourses/gcourses.component';
import { GcontactusComponent } from './gcontactus/gcontactus.component';
import { CourseregisterationhistoryComponent } from './courseregisterationhistory/courseregisterationhistory.component';
import { AppointmenthistoryComponent } from './appointmenthistory/appointmenthistory.component';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

export const routes: Routes = [
    {path:'',component:GhomeComponent},
    {path:'gaboutus',component:GaboutusComponent},
    {path:'ggallery',component:GgalleryComponent},
    {path:'gservices',component:GservicesComponent},
    {path:'gcourses',component:GcoursesComponent},
    {path:'gcontactus',component:GcontactusComponent},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'addcourse',component:AddcourseComponent},
    {path:'addservice',component:AddserviceComponent},
    {path:'adminhome',component:AdminhomeComponent},
    {path:'bookappointment',component:BookappointmentComponent},
    {path:'clienthistory',component:ClienthistoryComponent},
    {path:'contact',component:ContactComponent},
    {path:'coursemgt',component:CoursemgtComponent},
    {path:'courseregisteration',component:CourseregisterationComponent},
    {path:'courses',component:CoursesComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'groomingandrelaxation',component:GroomingandrelaxationComponent},
    {path:'haircuttingandmaintenance',component:HaircuttingandmaintenanceComponent},
    {path:'login',component:LoginComponent},
    {path:'makeupandhairstyling',component:MakeupandhairstylingComponent},
    {path:'register',component:RegisterComponent},
    {path:'sareedraping',component:SareedrapingComponent},
    {path:'servicemgt',component:ServicemgtComponent},
    {path:'services',component:ServicesComponent},
    {path:'updateservice/:id',component:UpdateserviceComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'courseregisterationhistory',component:CourseregisterationhistoryComponent},
    {path:'appointmenthistory',component:AppointmenthistoryComponent},
    {path:'registeredusers',component:RegisteredusersComponent}, 
    {path:'viewfeedback',component:ViewfeedbackComponent} 
    
];
