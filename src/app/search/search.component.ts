import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input()
  email: string | null = '';
  jobTitle : any = '';
  recruiteremail : any = '';
  jobpostings: any = [];
  searchQuery: string = '';
  jobPostings: any[] = [];
  filteredJobPostings: any[] = [];

  apiUrl = 'https://localhost:7165/api/JobPostings/GetAllJobPostings/all';
  private applyUrl = 'https://localhost:7165/api/JobApplication/AddJobApplication/apply';
// Update with your actual API URL
 
 
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
 
  ngOnInit() {
    this.fetchJobPostings();
  }
 
  fetchJobPostings(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data: any[]) => {
        console.log(data);
        this.jobPostings = data;
        this.jobPostings = data.map(job => ({ ...job, hasApplied: false }));
        this.filteredJobPostings = data;
      },
      (error) => {
        console.error('Error fetching job postings', error);
      }
    );
  }
 
  applyForJob(job_title: string, jp_companyname: string, remail: string, job_id : Int16Array): void {
    const userEmail = localStorage.getItem("loginUserEmail");
    const resumeLink = 'http://example.com/resume.pdf'; // Replace with actual resume link
 
    if (userEmail) {
        // Find the specific job posting that matches the given job_title and jp_companyname
        const jobToApply = this.filteredJobPostings.find(job =>
            job.job_title === job_title && job.jp_companyname === jp_companyname
        );
 
        if (jobToApply) {
          let email =    userEmail
          email = email.replace(/\\|"/g, '');          
            const jobApplication = {  
              job_id : job_id,          
                js_email: email,      
                status: 'Pending',
                js_resumelink: resumeLink,
                jp_title: jobToApply.job_title,
                jp_description: jobToApply.job_description,
                r_compname: jobToApply.jp_companyname,
                remail : remail,
            };
 
            this.submitJobApplication(jobApplication);
           // jobToApply.hasApplied = true;
        } else {
            alert('Job posting not found.');
        }
    } else {
        alert('User email not found.');
    }
}
 
  onSearchChange(): void {
    const query = this.searchQuery.trim().toLowerCase();
 
    if (query === '') {
      // If search query is empty, display all job postings
      this.filteredJobPostings = this.jobPostings;
    } else {
      // Filter job postings based on search query, checking both job_title and jp_companyname
      this.filteredJobPostings = this.jobPostings.filter((job: any) =>
        (job.job_title?.toLowerCase().includes(query) ||
         job.jp_companyname?.toLowerCase().includes(query))
      );
    }
  }

  private submitJobApplication(jobApplication: any): void {
    this.http.post(this.applyUrl, jobApplication).subscribe(
      response => {
        console.log('Application submitted successfully:', response);
        alert('Application submitted successfully')
        this.router.navigate(['/jsjobapplication'])
      },
      error => {
        alert('Error while submitting job application')
        
      }
    );
  }
}
