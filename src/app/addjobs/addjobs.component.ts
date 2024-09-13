import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrl: './addjobs.component.css'
})
export class AddjobsComponent{
  private apiurl = "https://localhost:7165/api/JobPostings/";

  constructor(private http: HttpClient, private router: Router) {}
  RjobpostedObj : any = []; 

  RjobpostingObj: any = { 
    job_title: '',
    job_location: '',
    contact_person: '',
    contact_number: '',
    functional_skills: '',
    technical_skills: '',
    job_description: '',
    job_type: '',
    last_date: '',
    salary: '',
    remail: ''
  }


  // Handle form submission
  addJobPosting() {
    // this.RjobpostingObj.job_title = (<HTMLInputElement>document.getElementById("jobTitle")).value;
    // this.RjobpostingObj.job_location = (<HTMLInputElement>document.getElementById("jobLocation")).value;
    // this.RjobpostingObj.contact_person = (<HTMLInputElement>document.getElementById("contactPerson")).value;
    // this.RjobpostingObj.contact_number = (<HTMLInputElement>document.getElementById("contactNumber")).value;
    // this.RjobpostingObj.functional_skills = (<HTMLInputElement>document.getElementById("functionalSkills")).value;
    // this.RjobpostingObj.technical_skills = (<HTMLInputElement>document.getElementById("technicalSkills")).value;
    // this.RjobpostingObj.job_description = (<HTMLInputElement>document.getElementById("jobDescription")).value;
    // this.RjobpostingObj.job_type = (<HTMLInputElement>document.getElementById("jobType")).value;
    // this.RjobpostingObj.last_date = (<HTMLInputElement>document.getElementById("lastDate")).value;
    // this.RjobpostingObj.salary = parseFloat((<HTMLInputElement>document.getElementById("salary")).value);
    // this.RjobpostingObj.recruiter_id = parseInt((<HTMLInputElement>document.getElementById("recruiterId")).value, 10);

    this.RjobpostedObj.push(this.RjobpostingObj);
    localStorage.setItem('RjobpostedObj', JSON.stringify(this.RjobpostedObj));
    this.http.post(this.apiurl + 'AddJobPosting', this.RjobpostingObj).subscribe({
      next: (response: any) => {
        // Check if the response status is what you expect for success
        alert('Job Posting inserted successfully.');
        console.log(response);
      },
      error: (error: any) => {
        // Ensure this only catches genuine errors from the backend
        if (error.status === 400 || error.status === 500) {
          console.error('Error inserting job posting:');
          alert('Failed to insert job posting.');
        } else {
          // If the status code does not indicate a failure, it might have inserted successfully
          console.warn('Warning: Received unexpected status, please verify.');
          alert('Job Posting inserted successfully (unexpected handling).');
        }
      }
    });
}}

