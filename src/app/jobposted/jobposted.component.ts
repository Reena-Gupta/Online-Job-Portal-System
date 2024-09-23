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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {  
    this.recruiteremail = localStorage.getItem('loginUserEmail');
    this.fetchJobPostings();
  }

  fetchJobPostings(): void {
    //console.log(this.apiUrl+'GetJobPostingById/'+this.recruiteremail)
    this.http.get(this.apiUrl+'GetJobPostingById/'+this.recruiteremail).subscribe(
      data => { 
        //console.log(data);
        this.jobpostings = data;
      }
    );
  }

  deleteJobPosting(job: any): void {
    const jobTitle = job.job_title;

    if (!jobTitle || !this.recruiteremail) {
        alert('Invalid job details.');
        return;
    }

    const url = `${this.apiUrl}DeleteJobPosting/${jobTitle}/${this.recruiteremail}`;
    console.log(url);

    // Call the DELETE endpoint with job title and recruiter email
    this.http.delete(url).subscribe(
        data => { 
            alert("Posting deleted successfully");
            console.log(data);
            this.fetchJobPostings();
        },
        error => {
            //console.error('There was an error!', error);
            alert('Error while deleting... Try again');
            this.fetchJobPostings();
        }
    );
}

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('loginadmin');
      this.router.navigate(['/']); // Redirect to homepage
    }
  }

}
