import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  jobSeeker: any = {};
  private apiUrl = 'https://localhost:7165/api/JobSeeker/GetJobSeekerByEmail';
 
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
 
 
  ngOnInit(): void {
    // Get the email from the route parameters
    const email = this.route.snapshot.paramMap.get('email');
   
    if (email) {
      this.http.get<any>(`${this.apiUrl}?email=${encodeURIComponent(email)}`).subscribe(
        data => {
          this.jobSeeker = data;
        },
        error => {
          console.error('Error fetching job seeker details', error);
        }
      );
    }
  }
}
