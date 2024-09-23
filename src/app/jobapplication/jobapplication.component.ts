import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrl: './jobapplication.component.css'
})
export class JobapplicationComponent {
  @Input() 
  email: string | null = '';
  remail : any = ''; 
  jobapplication: any = [];
  
  private apiUrl = 'https://localhost:7165/api/JobApplication/';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {  
    this.remail = localStorage.getItem('loginUserEmail');
    this.fetchJobPostings();
  }

  fetchJobPostings(): void {
    console.log(this.apiUrl+'GetJobAppByEmail/'+this.remail)
    this.http.get(this.apiUrl+'GetJobAppByEmail/'+this.remail).subscribe(
      data => { 
        console.log(data);
        this.jobapplication = data;
      }
    );
  }

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('loginadmin');
      this.router.navigate(['/']); // Redirect to homepage
    }
  }

  updateStatus(jobTitle: string, status: string): void {
    const url = `${this.apiUrl}UpdateJobapplicaton/${this.remail}/${jobTitle}/${status}`;
    console.log(url);

    this.http.patch(url, null).subscribe(
        data => { 
            console.log(data);
            alert('Job application status updated successfully.');
            this.fetchJobPostings();
        },
        error => {
            //console.error('There was an error!', error);
            alert('There was an error!');
        }
    );
}

}
