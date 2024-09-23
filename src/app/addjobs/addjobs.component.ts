import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrl: './addjobs.component.css'
})
export class AddjobsComponent{
  private apiurl = "https://localhost:7165/api/JobPostings/";

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}
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
    remail: '',
    jp_companyname : ''
  }


  // Handle form submission
  addJobPosting() {
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
          //alert('Failed to insert job posting.');
        } else {
          alert('Failed to insert job posting.');
        }
      }
    });
  }


  ngOnInit() {
    this.addJobPosting();
  }  

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('loginadmin');
      this.router.navigate(['/']); // Redirect to homepage
    }
  }

  isLastDateInvalid(): boolean {
    const today = new Date();
    const lastDate = new Date(this.RjobpostingObj.last_date);
    return lastDate < today;
  }
}

