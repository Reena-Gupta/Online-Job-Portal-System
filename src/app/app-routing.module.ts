import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JssidenavComponent } from './jssidenav/jssidenav.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { JobpostedComponent } from './jobposted/jobposted.component';
import { ProfileComponent } from './profile/profile.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { FormComponent } from './form/form.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminrecruitersComponent } from './adminrecruiters/adminrecruiters.component';
import { AdminjsComponent } from './adminjs/adminjs.component';
import { AdminjpComponent } from './adminjp/adminjp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { JformComponent } from './jform/jform.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { SearchComponent } from './search/search.component';
import { JsjobapplicationComponent } from './jsjobapplication/jsjobapplication.component';
import { AdminjobpostingComponent } from './adminjobposting/adminjobposting.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  // {path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: '', component: HomepageComponent },
  { path: 'form', component: FormComponent }, 
  { path: 'recruiterdashboard', component: RecruiterdashboardComponent },
  {path: 'jobposted', component: JobpostedComponent },
  {path: 'sidenav', component: SidenavComponent },
  {path: 'jssidenav', component: JssidenavComponent },
  {path: 'jobapplication', component: JobapplicationComponent },
  {path: 'addjobs', component: AddjobsComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'adminrecruiters', component: AdminrecruitersComponent , canActivate:[AuthGuard] },
  {path: 'adminjs', component: AdminjsComponent , canActivate:[AuthGuard]  },
  {path: 'adminjp', component: AdminjpComponent  , canActivate:[AuthGuard] },
  {path: 'adminlogin', component: AdminloginComponent },
  {path: 'admindashboard', component: AdmindashboardComponent },
  {path: 'jform', component: JformComponent },
  {path: 'jobseeker', component: JobseekerComponent },
  {path: 'search', component: SearchComponent },
  {path: 'jsjobapplication', component: JsjobapplicationComponent },
  {path: 'adminjobposting', component: AdminjobpostingComponent , canActivate:[AuthGuard]},
  {path : 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
