import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobposted',
  templateUrl: './jobposted.component.html',
  styleUrl: './jobposted.component.css'
})
export class JobpostedComponent implements OnInit {
  @Input() 
  email: string | null = '';
  recruiteremail : any = ''; 
  jobpostings: any = [];
  
  private apiUrl = 'https://localhost:7165/api/JobPostings/';

  constructor(private http: HttpClient) {}

  ngOnInit() {  
    this.recruiteremail = localStorage.getItem('loginUserEmail');
    this.fetchJobPostings();
  }

  fetchJobPostings(): void {
    console.log(this.apiUrl+'GetJobPostingById/'+this.recruiteremail)
    this.http.get(this.apiUrl+'GetJobPostingById/'+this.recruiteremail).subscribe(
      data => { 
        console.log(data);
        this.jobpostings = data;
      }
    );
  }

  updateJobPosting(job: any): void {
    // Logic to update job posting
    alert('Update functionality to be implemented.');
  }

  deleteJobPosting(job: any): void {
    alert('Delete functionality to be implemented.');
  }

  
}
