import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JobpostedComponent } from './jobposted/jobposted.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component'; 
// import { FormService } from './form.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminrecruitersComponent } from './adminrecruiters/adminrecruiters.component';
import { AdminjsComponent } from './adminjs/adminjs.component';
import { AdminjpComponent } from './adminjp/adminjp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JformComponent } from './jform/jform.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { SearchComponent } from './search/search.component';
import { JssidenavComponent } from './jssidenav/jssidenav.component';
import { JsjobapplicationComponent } from './jsjobapplication/jsjobapplication.component';
import { AdminjobpostingComponent } from './adminjobposting/adminjobposting.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    JobpostedComponent,
    JobapplicationComponent,
    AddjobsComponent,
    ProfileComponent,
    FormComponent,
    RecruiterdashboardComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminrecruitersComponent,
    AdminjsComponent,
    AdminjpComponent,
    HomepageComponent,
    JformComponent,
    JobseekerComponent,
    SearchComponent,
    JssidenavComponent,
    JsjobapplicationComponent,
    AdminjobpostingComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
