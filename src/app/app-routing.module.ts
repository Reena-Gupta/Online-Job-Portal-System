import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { JobpostedComponent } from './jobposted/jobposted.component';
import { ProfileComponent } from './profile/profile.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { FormComponent } from './form/form.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component';

const routes: Routes = [
  { path: '', component: FormComponent }, 
  { path: 'recruiterdashboard', component: RecruiterdashboardComponent },
  {path: 'sidenav', component: SidenavComponent },
  {path: 'jobposted', component: JobpostedComponent },
  {path: 'jobapplication', component: JobapplicationComponent },
  {path: 'addjobs', component: AddjobsComponent },
  {path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
