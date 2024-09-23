import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
 
 
@Component({
  selector: 'app-jsjobapplication',
  templateUrl: './jsjobapplication.component.html',
  styleUrl: './jsjobapplication.component.css'
})
export class JsjobapplicationComponent implements OnInit {
  @Input()
  email: string | null = '';
  jobseekeremail : any = '';
  jobapplications: any = [];
  resume : any;
  selectedJobSeeker: any = null;
  recruitermail: any;
 
  private apiUrl = 'https://localhost:7165/api/JobApplication/';
 
  constructor(private http: HttpClient, private router : Router) {}
 
  ngOnInit() {  
    this.jobseekeremail = localStorage.getItem('loginUserEmail');
    this.resume = localStorage.getItem('resumeLink')
    this.fetchJobApplied(this.jobseekeremail);
  }
 
  fetchJobApplied(email : any): void {
    email = email.substring(1, email.length - 1);
    const url = `${this.apiUrl}GetJobApplicationByEmail?email=${encodeURIComponent(email)}`;
    console.log(url);
    this.http.get(url).subscribe(
        data => {
            console.log(data);
            this.jobapplications = data;
        },
        error => {
            console.error('Error fetching job applications', error);
        }
    );
  } 

  viewResume(email: string): void {
    this.router.navigate(['/resume', { email }]);
    
    }
}

