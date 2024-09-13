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
import { FormService } from './form.service';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
