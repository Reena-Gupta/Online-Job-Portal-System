import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminjobposting',
  templateUrl: './adminjobposting.component.html',
  styleUrl: './adminjobposting.component.css'
})
export class AdminjobpostingComponent {
  jobPosting = {
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
    remail: '',
    jp_companyname: ''
  };

  Username: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private auth : AuthService) {}
  ngOnInit() {
    this.Username = localStorage.getItem('loginadmin');
    console.log(this.Username);
    console.log('Username retrieved in adminDashboard:', this.Username);
  }  

  onSubmit() {
    console.log('Job Posting Data:', this.jobPosting);

    this.http.post('https://localhost:7165/api/JobPostings/AddJobPosting', this.jobPosting, { responseType: 'text' })
      .subscribe(
        (response: string) => {
          if (response.startsWith("Job Posting")) {
            console.log('Response:', response);
            alert(response);
            this.router.navigate(['/adminjp']);
          } else {
            console.error('Unexpected response:', response);
            alert('Unexpected response from the server.');
          }
        },
        (error) => {
          console.error('Failed to insert job posting.', error);
          alert('Failed to insert job posting.');
        }
      );
}

confirmLogout(): void {
  if (confirm("Do you really want to logout?")) {
    localStorage.removeItem('authToken');
    this.auth.logout();
    this.router.navigate(['/']); // Redirect to homepage
  }
}
}
